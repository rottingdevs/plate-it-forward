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

def create_post(name, description, expiry, image):
    post = {
        "name": name,
        "description": description,
        "expiry": expiry,
        "image": image
    }
    return post

@app.post("/user/")
async def insert_user(user: dict):
    if app.collection.find_one({"username": user['username']}):
        return {"error": "user already exists"}
    app.collection.insert_one(user)

@app.post("/user")
async def insert_post(post: dict):
    app.collection.insert_one(post)

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