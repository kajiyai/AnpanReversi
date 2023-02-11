## 初回実行
必ず，このディレクトリで
```bash
cp example.env .env
```
を行い`.env`を作成する必要があります。

必要に応じて内容を変更してください。（example.env が更新されたタイミングで再実行が必要なことがあります）
## 環境構築
```bash
docker compose up -d
```
以上。 http://127.0.0.1:8000/ にアクセスしてDjangoのWelcomeページが表示されれば成功。
