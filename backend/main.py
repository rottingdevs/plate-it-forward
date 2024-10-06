from fastapi import FastAPI
from dotenv import dotenv_values
from pymongo import MongoClient
from routes import router as book_router
import base64

config = dotenv_values(".env")
app = FastAPI()

@app.on_event("startup")
def startup_db_client():
    app.mongodb_client = MongoClient(config.get("ATLAS_URI"))
    app.database = app.mongodb_client[config.get("DB_NAME")]
    app.users = app.database['users']
    app.foods = app.database['foods']

@app.on_event("shutdown")
def shutdown_db_client():
    app.mongodb_client.close()

@app.get("/user/{username}")
async def get_user_info(username: str):
    collection = app.database['books']
    return collection.find_one({ "title": "string" })

def create_user(username, address, email, name, phone):
    user = {
        "username": username,
        "address": address,
        "email": email,
        "name": name,
        "phone" : phone
    }
    return user

def create_food(username, name, description, expiry:
    food = {
        "username": username,
        "name": name,
        "description": description,
        "expiry": expiry
    }
    return food

@app.post("/user/")
async def insert_user(user: dict):
    if app.collection.find_one({"username": user['username']}):
        return {"error": "user already exists"}
    app.collection.insert_one(user)

@app.post("/user")
async def insert_food(post: dict):
    app.collection.insert_one(post)

@app.get("/users")
async def get_all_users():
    result = app.users.find({})
    users = []
    for user in result:
        users.append(user)
    return users

@app.get("/user/{username}")
async def get_user_info(username: str):
    return app.users.find_one({"username": username})

@app.get("/{username}/foods")
async def get_user_foods(username: str):
    foods_list = []
    foods = app.foods.find({})
    for food in foods:
        if food['username'] == username:
            foods_list.append(food)
    return foods_list

@app.get("/foods")
async def get_all_foods():
    result = app.foods.find({})
    foods = []
    for food in result:
        foods.append(food)
    return foods 

@app.get("/{username}/contact")
async def get_contact_info(username: str):
    contact = {}
    user = app.users.find_one({"username": username})
    contact["email"] = user["email"]
    contact["name"] = user["name"]
    contact["phone"] = user["phone"]
    contact["address"] = user["address"]
    return contact

app.include_router(book_router, prefix="/book")
