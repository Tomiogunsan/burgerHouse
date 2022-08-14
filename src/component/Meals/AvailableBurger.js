import classes from './AvailableBurger.module.css';
import BurgerItems from './BurgerItems/BurgerItems';
import Card from '../../UI/Card';

const burger =[
    {
        id: 'b1',
        name: 'Portobello Mushroom',
        description: 'A meaty texture of a portobello mushroom burger with carrots, green beans, red peppers, and broccoli',
        price: 19.00
    },
    {
        id: 'b2',
        name: 'Turkey Burger',
        description: 'A turkey burger made from ground breast meat with lettuce and tomatoes',
        price: 25.00
    },
    {
        id: 'b3',
        name: 'Beef Burger',
        description: 'A beef burger with double patty and crispy bacon',
        price: 20.00
    },
    {
        id: 'b4',
        name: 'Veggie Burgers',
        description: 'Made with legumes, tomatoes and cheese',
        price: 15.00
    },
]


const AvailableBurger = () => {

    const burgerList = burger.map((meal) => <BurgerItems 
    id={meal.id}
    key={meal.id}
    name={meal.name}
    description={meal.description}
    price={meal.price}/>);
    
    return (
        <section className={classes.burgers}>
            <Card>
          <ul>{burgerList}</ul>
          </Card>
        </section>
      );
}

export default AvailableBurger