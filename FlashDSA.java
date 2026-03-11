import java.util.*;

class Product {
    int id;
    String name;
    double price;

    Product(int id, String name, double price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

public class FlashDSA {

    static ArrayList<Product> products = new ArrayList<>();
    static LinkedList<Product> cart = new LinkedList<>();
    static Stack<String> actions = new Stack<>();
    static Queue<LinkedList<Product>> orders = new LinkedList<>();

    static Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {

        initializeProducts();

        int choice;

        do {
            System.out.println("\n==== FLASH CONSOLE STORE ====");
            System.out.println("1. View Products");
            System.out.println("2. Search Product");
            System.out.println("3. Sort Products by Price");
            System.out.println("4. Add to Cart");
            System.out.println("5. View Cart");
            System.out.println("6. Undo Last Cart Action");
            System.out.println("7. Place Order");
            System.out.println("8. Exit");

            System.out.print("Enter choice: ");
            choice = sc.nextInt();

            switch (choice) {

                case 1:
                    displayProducts();
                    break;

                case 2:
                    searchProduct();
                    break;

                case 3:
                    bubbleSort();
                    System.out.println("Products Sorted by Price.");
                    break;

                case 4:
                    addToCart();
                    break;

                case 5:
                    viewCart();
                    break;

                case 6:
                    undoAction();
                    break;

                case 7:
                    placeOrder();
                    break;

                case 8:
                    System.out.println("Thank you for using Flash!");
                    break;

                default:
                    System.out.println("Invalid Choice");
            }

        } while (choice != 8);
    }

    static void initializeProducts() {

        products.add(new Product(1, "Heritage Milk", 33));
        products.add(new Product(2, "Eggs", 85));
        products.add(new Product(3, "Potato", 20));
        products.add(new Product(4, "Lays Chips", 20));
        products.add(new Product(5, "Coca Cola", 45));
        products.add(new Product(6, "Mango", 199));
    }

    static void displayProducts() {

        System.out.println("\n--- Product List ---");

        for (Product p : products) {
            System.out.println(p.id + " " + p.name + " ₹" + p.price);
        }
    }

    static void searchProduct() {

        System.out.print("Enter product name: ");
        sc.nextLine();
        String key = sc.nextLine();

        for (Product p : products) {

            if (p.name.equalsIgnoreCase(key)) {
                System.out.println("Found: " + p.name + " ₹" + p.price);
                return;
            }
        }

        System.out.println("Product not found.");
    }

    static void bubbleSort() {

        for (int i = 0; i < products.size() - 1; i++) {

            for (int j = 0; j < products.size() - i - 1; j++) {

                if (products.get(j).price > products.get(j + 1).price) {

                    Product temp = products.get(j);
                    products.set(j, products.get(j + 1));
                    products.set(j + 1, temp);
                }
            }
        }
    }

    static void addToCart() {

        System.out.print("Enter Product ID: ");
        int id = sc.nextInt();

        for (Product p : products) {

            if (p.id == id) {
                cart.add(p);
                actions.push("ADD");
                System.out.println(p.name + " added to cart.");
                return;
            }
        }

        System.out.println("Product not found.");
    }

    static void viewCart() {

        if (cart.isEmpty()) {
            System.out.println("Cart is empty.");
            return;
        }

        double total = 0;

        System.out.println("\n--- Cart Items ---");

        for (Product p : cart) {
            System.out.println(p.name + " ₹" + p.price);
            total += p.price;
        }

        System.out.println("Total = ₹" + total);
    }

    static void undoAction() {

        if (actions.isEmpty()) {
            System.out.println("Nothing to undo.");
            return;
        }

        String action = actions.pop();

        if (action.equals("ADD") && !cart.isEmpty()) {
            Product p = cart.removeLast();
            System.out.println("Removed " + p.name + " from cart.");
        }
    }

    static void placeOrder() {

        if (cart.isEmpty()) {
            System.out.println("Cart empty.");
            return;
        }

        orders.add(new LinkedList<>(cart));
        cart.clear();

        System.out.println("Order placed successfully!");
        System.out.println("Orders in queue: " + orders.size());
    }
}