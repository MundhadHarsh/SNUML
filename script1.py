import sys
import pickle
import traceback

try:
    loaded_model = pickle.load(open("logistic1", 'rb'))
    result = loaded_model.predict([[34,12,5940.83050148322]])
    print('Resut: '+result+'-------------')
except:
    except Exception as e: print(e)


print('#Hello from python#')
print('First param:'+sys.argv[1]+'#')
# print('Second param:'+sys.argv[2]+'#')

