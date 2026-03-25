import requests

def main():
    print("Hello from server!")
    
    res = requests.get('https://pokeapi.co/api/v2/pokemon/ditto')
    
    if res.ok:
        print(res.json())
    


if __name__ == "__main__":
    main()
