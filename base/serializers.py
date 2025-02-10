from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    def get_image(self, obj):
        if obj.image:
            return f"/images/{obj.image.name}"  # Ensure only one /images/ prefix
        return None

    class Meta:
        model = Product
        fields = '__all__'