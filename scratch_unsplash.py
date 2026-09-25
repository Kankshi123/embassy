import urllib.request
import re
import sys

def search(query):
    req = urllib.request.Request(f'https://unsplash.com/s/photos/{query}', headers={'User-Agent': 'Mozilla/5.0'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        # Find json payload
        ids = re.findall(r'\"id\":\"([a-zA-Z0-9_-]{10,})\"', html)
        return list(set(ids))[:5]
    except Exception as e:
        return str(e)

print("wazwan:", search("wazwan-food"))
print("biryani:", search("biryani"))
print("gujarati:", search("gujarati-thali"))
print("bengali:", search("bengali-food"))
