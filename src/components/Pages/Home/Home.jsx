import React from 'react';
import BannerSection from './BannerSection/BannerSection';
import FarnitureSection from './FarnitureSection/FarnitureSection';
import CollectionSection from './CollectionSection/CollectionSection';
import ConceptSection from './ConceptSection/ConceptSection';
import ProductSection from './ProductSection/ProductSection';
import DesignSection from './DesignSection/DesignSection';
import PostSection from './PostSection/PostSection';

const Home = () => {
    return (
        <div>
            <BannerSection/>
            <FarnitureSection/>
            <CollectionSection/>
            <ConceptSection/>
            <ProductSection/>
            <DesignSection/>
            <PostSection/>
        </div>
    );
};

export default Home;