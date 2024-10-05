from fastapi import FastAPI
from dotenv import dotenv_values
from pymongo import MongoClient
from routes import router as book_router

from user import User
from user import Food

config = dotenv_values(".env")
app = FastAPI()

# create example user
test_user = User(
    name="John Doe",
    username="johndoe",
    email="john@gmail.com",
    phone="123-456-7890",
    food= Food(
        name="apple",
        description="A red apple",
        expiry="2022-05-01"
    )
)

@app.on_event("startup")
def startup_db_client():
    app.mongodb_client = MongoClient(config["ATLAS_URI"])
    app.database = app.mongodb_client[config["DB_NAME"]]
    app.collection = app.database['users']

@app.on_event("shutdown")
def shutdown_db_client():
    app.mongodb_client.close()

@app.get("/user/{username}")
async def get_user_info(username: str):
    collection = app.database['books']
    return collection.find_one({ "title": "string" })

def create_user():
    document = {
        "username": test_user.username,
        "address": test_user.address,
        "email": test_user.email,
        "name": test_user.name,
        "phone" : test_user.phone,
        "foods": [ 
            {
                "name": test_user.food.name,
                "description": test_user.food.description,
                "expiry": test_user.food.expiry
            }
        ]
    }
    return document

@app.get("/")
async def insert_user(user: dict):
    create_user()
    collection = app.database['plate-it-forward']
    return collection.insert_one(user)

@app.get("/users")
async def get_all_users():
    result = app.collection.find({})
    users = []
    for user in result:
        users.append(user)
    return users

@app.get("/user/{username}")
async def get_user_info(username: str):
    return app.collection.find_one({"username": username})

@app.get("/{username}/foods")
async def get_user_foods(username: str):
    return app.collection.find_one({"username": username})['foods']

@app.get("/foods")
async def get_all_foods():
    foods = []
    result = app.collection.find({})
    for users in result:
        for food in users['foods']:
            food["userid"] = users["_id"]
            food["email"] = users["email"]
            food["phone"] = users["phone"]
            foods.append(food)
    return foods