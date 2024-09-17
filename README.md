# Rate Consolidation Solution

**Challenge**: Shopify consolidates shipping rates - i.e if n items in cart from n locations, shipping = n x rate. Some merchants do not want to pass multi-origin shipping costs onto their customers and prefer to absorb the shipping costs themselves.

**Solution**: Use the Delivery Customisation API to conditionally hide free shipping options based on deliveryGroup. Specifically, if deliveryGroups > 1, hide free option on the first group, and hide the paid shipping on the rest of the groups. This allows them to effectively charge the customer once for multi-origin shipping.

**Demo**: https://screenshot.click/16-09-e9iiu-9rk4a.mp4

See run.ts and run.graphql in src for code.

![image](https://screenshot.click/17-25-ln07n-omzit.png)

