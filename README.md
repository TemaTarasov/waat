## Getting Started

1. add Laradock
```
> git submodule init
> git submodule update
```

2. Create `.env` files
```
> cp .env.example .env
> cp ./laradock/.env.laradock ./laradock/.env
```

3. Update `.env` files: `./.env` & `./laradock/.env`
4. Start docker
```
> cd laradock
> docker-compose up -d nginx postgres
```

5. Finish with installation inside the workspace
```
> docker-compose exec workspace bash
> composer install
> php artisan key:generate
> php artisan migrate
> php artisan db:seed
```
6. Run FE in different tab
```
> (npm|yarn) start
```

### Enjoy
