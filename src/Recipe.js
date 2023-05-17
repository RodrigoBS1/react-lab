const Recipe = ({name, style, prepTime, cookTime, instructions}) => {
    return (
      <article className="recipe">
        <h4>{name}</h4>
        <div className="recipeDetails">
          <div>{style}</div>
          <div>{prepTime}</div>
          <div>{cookTime}</div>
        </div>
        <div>{instructions}</div>
      </article>
    );
  };
  
  export default Recipe