import { Container, Filters, ProductsGroupList, Title, TopBar } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="basis-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList 
                title="Пиццы"
                key={"пиццы"}
                products={[
                  {
                    id: 1,
                    name: 'Сырный цыпленок',
                    price: 430,
                    imageUrl: '/pizza.png',
                  },
                  {
                    id: 2,
                    name: 'Сырный цыпленок',
                    price: 390,
                    imageUrl: '/pizza.png',
                  },
                  {
                    id: 3,
                    name: 'Сырный цыпленок',
                    price: 270,
                    imageUrl: '/pizza.png',
                  },
                  {
                    id: 4,
                    name: 'Сырный цыпленок',
                    price: 270,
                    imageUrl: '/pizza.png',
                  },
                  {
                    id: 5,
                    name: 'Сырный цыпленок',
                    price: 270,
                    imageUrl: '/pizza.png',
                  },
                  {
                    id: 6,
                    name: 'Сырный цыпленок',
                    price: 270,
                    imageUrl: '/pizza.png',
                  }
                ]}
                categoryId={1}
              />
              <ProductsGroupList 
                title="Комбо"
                key={"комбо"}
                products={[
                  {
                    id: 1,
                    name: 'Омлет',
                    price: 180,
                    imageUrl: '/pizza.png',
                  }
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
