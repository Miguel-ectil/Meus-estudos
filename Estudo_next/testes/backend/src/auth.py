import jwt
import datetime

from src import settings

from ninja.security import HttpBearer



class AuthBearer(HttpBearer):
    def authenticate(self, request, token):
        try:

            JWT_SIGNING_KEY = getattr(settings, "JWT_SIGNING_KEY", None)
            payload = jwt.decode(token, JWT_SIGNING_KEY, algorithms=["HS256"])
            username: str = payload.get("username")
            if username is None:
                return None
        except jwt.PyJWTError as e:
            return None
        return payload
    
    def create_token(self, username):
        JWT_SIGNING_KEY = getattr(settings, "JWT_SIGNING_KEY", None)
        JWT_ACCESS_EXPIRY = getattr(settings, "JWT_ACCESS_EXPIRY")
        to_encode_access = {"username": username}
        access_expire = datetime.datetime.now(
        ) + datetime.timedelta(minutes=int(JWT_ACCESS_EXPIRY))
        to_encode_access["exp"] = access_expire
        return jwt.encode(to_encode_access, JWT_SIGNING_KEY, algorithm="HS256")
