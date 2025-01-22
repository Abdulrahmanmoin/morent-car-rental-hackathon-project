// app/category/page.tsx
import React, { Suspense } from 'react';
import CategoryComponent from '@/components/CategoryComponent';

const CategoryPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CategoryComponent />
        </Suspense>
    );
};

export default CategoryPage;
