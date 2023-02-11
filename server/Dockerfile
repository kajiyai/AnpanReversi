FROM python:3.10

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

RUN apt update && apt install -y \
    postgresql-client

RUN pip install --upgrade pip setuptools wheel

WORKDIR /code
COPY requirements.txt .
RUN pip install --no-cache -r requirements.txt
CMD [ "python", "manage.py", "runserver", "0.0.0.0:8000"]

# 本番環境ではそれぞれの実行環境にコピーする必要がある
# COPY . .

# EXPOSE 8000
