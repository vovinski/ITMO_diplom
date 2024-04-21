CREATE DATABASE productdb;
GRANT ALL PRIVILEGES ON productdb.* TO 'lvv'@'%';
USE productdb;
CREATE TABLE Products
(
    Id INT AUTO_INCREMENT PRIMARY KEY,
    ProductName VARCHAR(30) NOT NULL,
    Manufacturer VARCHAR(20) NOT NULL,
    ProductCount INT DEFAULT 0,
    Price DECIMAL NOT NULL
);
INSERT Products(ProductName, Manufacturer, ProductCount, Price) VALUES ('iPhone X', 'Apple', 5, 76000);
