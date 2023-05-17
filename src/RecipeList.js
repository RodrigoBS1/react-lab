import { useEffect, useState } from "react";
import Recipe from "./Recipe";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  },[])

  return (
    <section>
      <h2>Recipes</h2>
      <section className="recipeList">
        {recipes.map((recipe) => (
          <Recipe
            name={recipe.name}
            style={recipe.style}
            prepTime={recipe.prep_time}
            cookTime={recipe.cook_time}
            instructions={recipe.instructions}
          />
        ))}
      </section>
    </section>
  );
}

export default RecipeList;


// class RecipeList extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             recipes: []
//         }
//     }
//     //Lifecycle Method
//     componentDidMount() {
//         fetch('http://localhost:3001/recipes')
//             .then(response => response.json())
//             .then(data => this.setState({ recipes: data }))
//     }

//     render() {
//         return (
//             <section>
//                 <h2>Recipes</h2>
//                 <section className="recipeLis">
//                     {
//                         this.state.recipes.map(recipe => <Recipe 
//                             name={recipe.name}
//                             style={recipe.style} 
//                             prepTime={recipe.prep_time} 
//                             cookTime={recipe.cook_time} 
//                             instructions={recipe.instructions} />)
//                     }
//                 </section>
//             </section>
//         )
//     }
// }

