# pull official base image
FROM python:3.7.0-slim

# set work directory
WORKDIR /app

# set environment variables
#YTHONDONTWRITEBYTECODE: Prevents Python from writing pyc files to disc (equivalent to python -B option)
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install dependencies
RUN pip install --upgrade pip
COPY ./requirements.txt /app/requirements.txt
RUN pip install -r /app/requirements.txt

ENV PORT 8080

# copy project
COPY . /app

# 5
CMD exec gunicorn --bind :$PORT --workers 1 --threads 8 app:app