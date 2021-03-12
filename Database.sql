CREATE TABLE "customers" (
  "id" SERIAL PRIMARY KEY,
  "name" text,
  "gender" text,
  "email" text,
  "cpf" text,
  "description" text
);

CREATE TABLE "agencies" (
  "id" SERIAL PRIMARY KEY,
  "address_id" text,
  "cpnj" text,
  "quantityCars" text,
  "rate" text,
  "description" text
);

CREATE TABLE "addresses" (
  "id" SERIAL PRIMARY KEY,
  "street" text,
  "neighborhood" text,
  "complement" text,
  "number" text,
  "city" text,
  "description" text
);

CREATE TABLE "cars" (
  "id" SERIAL PRIMARY KEY,
  "agencie" text,
  "color" text,
  "board" text,
  "model_id" text,
  "mileage" text,
  "description" text
);

CREATE TABLE "models" (
  "id" SERIAL PRIMARY KEY,
  "description" text,
  "type" text,
  "brand" text,
  "year" text
);

CREATE TABLE "orders" (
  "id" SERIAL PRIMARY KEY,
  "agencie_id" text,
  "customer_id" text,
  "client_name" text,
  "returned" boolean
);

CREATE TABLE "cars_order" (
  "id" SERIAL PRIMARY KEY,
  "cars_id" text,
  "orders_id" text
);

ALTER TABLE "agencies" ADD FOREIGN KEY ("address_id") REFERENCES "addresses" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("customer_id") REFERENCES "customers" ("id");

ALTER TABLE "cars_order" ADD FOREIGN KEY ("cars_id") REFERENCES "cars" ("id");

ALTER TABLE "cars_order" ADD FOREIGN KEY ("orders_id") REFERENCES "orders" ("id");

ALTER TABLE "cars" ADD FOREIGN KEY ("model_id") REFERENCES "models" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("agencie_id") REFERENCES "agencies" ("id");
