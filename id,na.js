import java.io.*;

class Product implements Serializable {
    private static final long serialVersionUID = 1L;
    private int id;
    private String name;
    private String category;
    private double price;

    // Constructor
    public Product(int id, String name, String category, double price) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
    }

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    // Deserialize method
    public static Product deserialize(String filename) {
        Product product = null;
        try {
            FileInputStream fileIn = new FileInputStream(filename);
            ObjectInputStream in = new ObjectInputStream(fileIn);
            product = (Product) in.readObject();
            in.close();
            fileIn.close();
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
        return product;
    }

    public static void main(String[] args) {
        // Serialize the object
        Product productToSerialize = new Product(1, "Laptop", "Electronics", 999.99);
        String filename = "product.ser";
        serializeProduct(productToSerialize, filename);
        
        // Deserialize the object
        Product deserializedProduct = deserialize(filename);
        if (deserializedProduct != null) {
            System.out.println("Deserialized Product:");
            System.out.println("ID: " + deserializedProduct.getId());
            System.out.println("Name: " + deserializedProduct.getName());
            System.out.println("Category: " + deserializedProduct.getCategory());
            System.out.println("Price: " + deserializedProduct.getPrice());
        }
    }
    
    // Helper method to serialize product
    private static void serializeProduct(Product product, String filename) {
        try {
            FileOutputStream fileOut = new FileOutputStream(filename);
            ObjectOutputStream out = new ObjectOutputStream(fileOut);
            out.writeObject(product);
            out.close();
            fileOut.close();
            System.out.println("Product serialized successfully.");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
