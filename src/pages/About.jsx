import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        
        {/* Заголовок */}
        <div className="about-header">
          <h1 className="about-title">О бренде SVITI</h1>
          <p className="about-subtitle">Элегантность в каждой детали</p>
        </div>

        {/* О бренде */}
        <div className="about-section">
          <div className="about-content">
            <h2>Наша философия</h2>
            <p>
              SVITI — это не просто одежда, это воплощение стиля, комфорта и уверенности. 
              Мы создаем коллекции, которые подчеркивают индивидуальность каждой женщины 
              и дарят ощущение легкости в течение всего дня.
            </p>
            <p>
              Каждая модель создается с любовью к деталям — от выбора качественных материалов 
              до продуманного кроя, который идеально сидит по фигуре.
            </p>
          </div>
        </div>

        {/* Размерная сетка */}
        <div className="sizing-section">
          <h2>Размерная сетка</h2>
          <p className="sizing-description">
            Наша одежда представлена в размерах S-42 и M-46. 
            Для вашего удобства приводим подробные замеры:
          </p>
          
          <div className="sizing-tables">
            {/* Таблица для костюмов */}
            <div className="size-table">
              <h3>Костюмы и платья</h3>
              <table className="size-chart">
                <thead>
                  <tr>
                    <th>Размер</th>
                    <th>Грудь</th>
                    <th>Талия</th>
                    <th>Бедра</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>S-42</td>
                    <td>82-86 см</td>
                    <td>64-68 см</td>
                    <td>90-94 см</td>
                  </tr>
                  <tr>
                    <td>M-46</td>
                    <td>90-94 см</td>
                    <td>72-76 см</td>
                    <td>98-102 см</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Советы по выбору размера */}
            <div className="sizing-tips">
              <h3>Как выбрать размер?</h3>
              <ul>
                <li>📏 Измерьте обхват груди, талии и бедер</li>
                <li>👗 Учитывайте желаемую посадку (приталенная или свободная)</li>
                <li>🎯 Если между размерами, выбирайте больший</li>
                <li>📞 Нужна помощь? Звоните — поможем с выбором!</li>
              </ul>
            </div>
          </div>

          {/* Место для фото размерной сетки */}
          <div className="size-guide-image">
            <div className="image-placeholder">
              <p>📐 Здесь будет изображение размерной сетки</p>
              <small>Вы сможете заменить это на реальное фото</small>
            </div>
          </div>
        </div>

        {/* Отзывы */}
        <div className="reviews-section">
          <h2>Отзывы наших клиенток</h2>
          
          <div className="reviews-grid">
            <div className="review-card">
              <div className="review-header">
                <div className="reviewer-avatar">А</div>
                <div className="reviewer-info">
                  <h4>Анна</h4>
                  <div className="review-stars">★★★★★</div>
                </div>
              </div>
              <p className="review-text">
                "Плюшевый костюм — это невероятно удобно! Ношу дома и на прогулках. 
                Качество пошива на высоте, ткань приятная к телу."
              </p>
              <span className="review-date">2 недели назад</span>
            </div>

            <div className="review-card">
              <div className="review-header">
                <div className="reviewer-avatar">М</div>
                <div className="reviewer-info">
                  <h4>Мария</h4>
                  <div className="review-stars">★★★★★</div>
                </div>
              </div>
              <p className="review-text">
                "Заказала летний костюм с шортами. Сидит идеально! 
                Размер соответствует таблице. Быстрая доставка и вежливые консультанты."
              </p>
              <span className="review-date">1 месяц назад</span>
            </div>

            <div className="review-card">
              <div className="review-header">
                <div className="reviewer-avatar">Е</div>
                <div className="reviewer-info">
                  <h4>Екатерина</h4>
                  <div className="review-stars">★★★★☆</div>
                </div>
              </div>
              <p className="review-text">
                "Платье с кружевом очень нежное. Качество хорошее, но нужно учесть, 
                что белый цвет немного просвечивает. Рекомендую носить с подъюбником."
              </p>
              <span className="review-date">3 недели назад</span>
            </div>
          </div>
        </div>

        {/* Контакты и информация */}
        <div className="contact-section">
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Контакты</h3>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+7 (XXX) XXX-XX-XX</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>info@sviti.ru</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕒</span>
                <span>Ежедневно с 9:00 до 21:00</span>
              </div>
            </div>

            <div className="shipping-info">
              <h3>Доставка и возврат</h3>
              <ul>
                <li>🚚 Бесплатная доставка от 5000₽</li>
                <li>↩️ Возврат в течение 14 дней</li>
                <li>🎁 Примерка перед покупкой</li>
                <li>💳 Несколько способов оплаты</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;