import requests
from django.shortcuts import render
from decouple import config
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product , Cart , CartItem , Banner
from .serializers import ProductSerializer , BannerSerializer
# Create your views here.


OPENROUTER_API_KEY = config("OPENROUTER_API_KEY")




@api_view(['GET','POST'])
def product_list(request):
    if request.method == 'GET':
      products = Product.objects.all()
      serializer = ProductSerializer(products,many=True)
      return Response(serializer.data)


    if request.method == 'POST':
      serializer = ProductSerializer(data=request.data)
      serializer.is_valid()
      serializer.save()
      return Response(serializer.data,status=201)

@api_view(['GET'])
def product_details(request,id):
    product = Product.objects.get(id=id)
    serializer = ProductSerializer(product)
    return Response(serializer.data)



@api_view(['POST'])
def add_to_cart(request):
    product_id = request.data.get('product_id')
    quantity = request.data.get('quantity')


    product = Product.objects.get(id=product_id)
    cart,created = Cart.objects.get_or_create(id=1)


    cart_Item , created = CartItem.objects.get_or_create(
        cart=cart,
        product=product,
        quantity=quantity
    )


    if not created :
       cart_Item.quantity += quantity
    else :
       cart_Item.quantity = quantity

    cart_Item.save()

    return Response({'message':'Product added to cart'})




@api_view(['GET'])
def banner_list(request):
    banner = Banner.objects.all()
    serializer = BannerSerializer(banner,many=True)
    return Response(serializer.data)





@api_view(['POST'])
def ai_chat(request):
   user_message = request.data.get('message')

   response = requests.post(
      "https://openrouter.ai/api/v1/chat/completions",
      headers={
         "Authorization": f"Bearer {OPENROUTER_API_KEY}",
         "Content-Type": "application/json"
      },
      json={
         "model": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free",
         "messages": [
            {
               "role" : "system",
               "content" : "You are a helpful customer support assistant."
            },
            {
               "role" : "user",
               "content" :  user_message
            }
         ]
      }
   )

   data = response.json()
   ai_reply = data['choices'][0]['message']['content']

   return Response({'message':ai_reply})
