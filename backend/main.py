from fastapi import FastAPI
from dotenv import dotenv_values
from pymongo import MongoClient
from routes import router as book_router

config = dotenv_values(".env")
app = FastAPI()

@app.on_event("startup")
def startup_db_client():
    app.mongodb_client = MongoClient(config["ATLAS_URI"])
    app.database = app.mongodb_client[config["DB_NAME"]]
    app.collection = app.database['users']

@app.on_event("shutdown")
def shutdown_db_client():
    app.mongodb_client.close()

@app.get("/")
def hello_world():
    return "Hello world!"

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