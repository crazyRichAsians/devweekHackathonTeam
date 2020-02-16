# Building Docker file
```{shell}
docker build -t docker-test .
```

# Run Docker file
```{shell}
docker run -p 8080:8080 docker-test
```

# Set up api endpoint on pagekite
```{shell}
pagekite.py 8080 insureme.pagekite.me
```