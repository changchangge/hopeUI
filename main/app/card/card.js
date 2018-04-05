import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import $ from 'jQuery';

import colors from '../rules/colors.js';
import cssCard from './card.less';
import uuid from '../tools/uuid.js';
import colorTrans from '../tools/colorTrans.js';

class Card extends React.Component {
  setStyle() {
    const { normalCardStyle, hoverCardStyle, hoverCoverStyle,
            cover, avatar, colums, coverRatio, } = this.props;

    normalCardStyle.width = `${1 / colums * 100}%`;

    colorTrans(normalCardStyle, `.card-${this.uuid}`);
    colorTrans(hoverCardStyle, `.card-${this.uuid}:hover`);
    colorTrans(hoverCoverStyle, `.card-${this.uuid}:hover .${cssCard.cover}`);

    colorTrans({
      'background-image': `url(${cover})`,
      'padding-bottom': `${coverRatio * 100}%`,
    }, `.card-${this.uuid} .${cssCard.cover}`);

    colorTrans({
      'background-image': `url(${avatar})`,
    }, `.card-${this.uuid} .${cssCard.avatar}`);
  }

  componentWillMount() {
    this.uuid = uuid(8);
    this.setStyle();
  }

  componentDidMount() {
    const { areaStyle } = this.props;
  }

  render() {
    const { className: propClassName, coverBorder } = this.props;

    return (
      <div className={classnames(propClassName, cssCard.card, `card-${this.uuid}`)}>
        <div className={classnames(cssCard.cardContent)}>
          <div className={classnames(cssCard.coverContainer, { coverBorder: coverBorder })}>
            <div className={classnames(cssCard.cover)}>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  // 列数
  colums: PropTypes.number.isRequired,

  // 标题
  title: PropTypes.string.isRequired,

  // 描述
  description: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  // 封面地址
  cover: PropTypes.string,

  // 封面纵横比
  coverRatio: PropTypes.number,

  // 封面图片是否受内边距限制
  coverBorder: PropTypes.bool,

  // 作者头像地址
  avatar: PropTypes.string,

  // 作者名称
  author: PropTypes.string,

  // 点击数
  hits: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),

  // 评论数
  comments: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),

  // 卡片样式
  normalCardStyle: PropTypes.object,

  // 鼠标悬停卡片样式
  hoverCardStyle: PropTypes.object,

  // 鼠标悬停封面样式
  hoverCoverStyle: PropTypes.object,
};

Card.defaultProps = {
  description: false,
  cover: './dist/card/cover.jpg',
  coverRatio: .75,
  coverBorder: false,
  avatar: './dist/card/avatar.png',
  author: '匿名',
  hits: false,
  comments: false,
  normalCardStyle: {
    background: 'white',
    color: 'grey900',
  },
  hoverCardStyle: {
    background: 'white',
    color: 'grey900',
  },
  hoverCoverStyle: {
    opacity: .8,
  },
};

export default Card;