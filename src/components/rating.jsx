import StarRating from 'react-native-star-rating';
 


// Defina a classe GeneralStarExample
class GeneralStarExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 0
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    return (
      // Renderize o componente StarRating, passando as propriedades necessárias
      <StarRating
        disabled={false}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        starSize={16}
        fullStalor={'#F2DB2E'}
      />
    );
  }
}

// Exporte a classe GeneralStarExample como padrão
export default GeneralStarExample;