import React from "react";
import { SubHeroCt } from "../../components/SubHero/style";
import { FilterContainer, ProductContainer, ShopCt } from "./style";

const Shop = () => {
  return (
    <div>
      <SubHeroCt>Shop</SubHeroCt>
      <ShopCt>
        <FilterContainer>Filter Section</FilterContainer>
        <ProductContainer>
            Product Container
        </ProductContainer>
      </ShopCt>
    </div>
  );
};

export default Shop;
