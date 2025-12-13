import { selectAllCategories } from "./categoriesSlice";
import { useSelector } from 'react-redux';
import { addCategory , editCategory , deleteCategory } from "./categoriesSlice";

const CategorySelector = ({ setSelectedCategory }) => {

    const categories = useSelector(selectAllCategories);

    return (
        <div style={{ padding: '20px', display: 'flex', gap: '10px' }}>
            <button onClick={() => setSelectedCategory('All')}>All</button>
            {categories.map((category) => (
                <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                >
                {category.name}
                </button>
            ))}
        </div>
    )
}

export default CategorySelector;