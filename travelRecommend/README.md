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

# Call api endpoint
```{node.js}
return fetch('http://insureme.pagekite.me/travel_recommendations', {
    method: 'post',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
        },
    body: JSON.stringify({"x_input":"123"})
})
```

```{node.js}
Returns JSON
{
  "ranking": {
    "0": "Alcatraz Island",
    "1": "Muir Woods National Monument",
    "2": "California Academy of Sciences",
    "3": "Colma Cremation and Funeral Services",
    "4": "St Stephen's Episcopal Church, Belvedere",
    "5": "Rodeo Beach",
    "6": "Serbian Cemetery",
    "7": "Corinthian Yacht Club",
    "8": "Spaulding Wooden Boat Center",
    "9": "San Francisco Yacht Club"
  }
}
```
