import CategoryCard from "../../CategoriesCard"

function CategoriesList({categories}) {
  return (
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((item) => (
            <CategoryCard
              key={item.title}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
  )
}

export default CategoriesList