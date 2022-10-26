interface Fruit {
  id: number;
  name: string;
  price: number;
}

const db: Fruit[] = [
  { id: 1, name: "apple", price: 100 },
  { id: 2, name: "banana", price: 130 },
  { id: 3, name: "orange", price: 110 },
  { id: 4, name: "grape", price: 140 },
];

export const resolvers = {
  Query: {
    fruits: () => db,
    fruit: (id: number) => db.find((fruit) => fruit.id == id),
  },
};
