import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            opened: false,
        };
    }

    isFavorite = () => {
        let list = this.props.favoritesFilmList;
        return list.filter((listItem) => listItem === this.props.id).length > 0;
    };

    addFavorite = () => {

        let list = this.props.favoritesFilmList;
        let id = this.props.id;

        (this.isFavorite()) ? list = list.filter(item => item !== id) : list.push(id);
        this.props.updateFavoriteList(list);
    };

    render() {
        const {
            backgroundImage,
            title,
            releaseDate,
            score,
            votes,
            description
        } = this.props;
        const { opened } = this.state;

        return (
            <div className="card">
                <div
                    className="card__image"
                    style={{
                        backgroundImage: `url('${backgroundImage}')`,
                    }}
                />

                <div className="card__title">
                    {title}
                </div>

                <div className="card__like">
                    <i
                        className={this.isFavorite() ? 'fa fa-heart': "fa fa-heart-o"}
                        onClick={this.addFavorite}
                    />
                </div>

                <div className="card__subtitle">
                    <span>{releaseDate}</span>
                    <span>{score} ({votes} votes)</span>
                </div>

                <div className="card-info">
                    <div
                        className="card-info__header"
                        onClick={() => this.setState({ opened: !opened })}>
                        Summary
                    </div>

                    {opened
                        ? (
                            <div className="card-info__description">
                                {description}
                            </div>
                        )
                        : null
                    }
                </div>
            </div>

        );
    }
}

export default Card;
