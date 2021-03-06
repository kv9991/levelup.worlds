import React from 'react';
import { Helmet } from 'react-helmet';
import ContactForm from '../../components/contactForm';
import Modal from '../../components/modal';
import config from '../../utils/config';
import InformationTable from '../../components/informationTable';
import Socials from '../../components/socials';

const contactFormFields = [
  {
    placeholder: 'Ваше имя',
    name: 'name',
    type: 'text',
  },
  {
    placeholder: 'Ваш E-Mail',
    name: 'email',
    type: 'text',
  },
  {
    placeholder: 'Контактный телефон',
    name: 'phone',
    type: 'text',
  },
  {
    placeholder: 'Ваше сообщение',
    name: 'message',
    type: 'textarea',
  },
];

const renderContactForm = () => (
  <ContactForm
    isFluid
    url={config.contactposturl}
    fields={contactFormFields}
  />
);

const About = () => {
  const contactModalConfiguration = {
    title: 'Обратная связь',
    description: 'Деловое предложение',
    content: 'С вашими деловыми предложениями вы можете обращаться при помощи данной формы обратной связи',
  };
  const informationTableItems = [
    {
      head: '45',
      title: 'Проектов',
      description: 'Мы берёмся даже за самые сложные проекты и доводим их до конца!',
    },
    {
      head: '8',
      title: 'Сотрудников',
      description: 'Наша команда состоит только из самых опытных специалистов.',
    },
    {
      head: '5',
      title: 'Лет',
      description: 'Мы работаем на рынке уже более 5 лет, поэтому нам можно доверять!',
    },
  ];
  return (
    <div className="page page-about">
      <Helmet>
        <title>О нас - Levelup Worlds</title>
        <meta name="description" content="О компании Levelup Worlds. Digital-студия полного цикла" />
      </Helmet>
      <div className="block">
        <div className="block-title left" id="prices">
          <h5 className="super title">
						О нас
          </h5>
          <p className="description">Что такое Levelup Worlds?</p>
        </div>
      </div>
      <div className="block">
        <p className="primary">
					Levelup Worlds - это <b className="primary">Digital-агентство</b> полного цикла, которое уже 5-й год помогает малому и среднему бизнесу выполнять свою работу
        </p>
      </div>
      <div className="block">
        <p className="primary">
					Мы помогаем привлекать клиентов, рассказывать о вашем продукте, создавать сам продукт, продумывать концепции продукта и ещё много чего интересного.
        </p>
      </div>
      <div className="block">
        <InformationTable items={informationTableItems} />
      </div>
      <div className="block">
        <p className="primary">
          <Socials visible />
					У вас есть деловое предложение? Напишите нам сегодня! Для этого вам необходимо просто нажать на кнопку ниже и следовать следующим инструкциям. Мы свяжемся с вами сразу, как это станет возможным
        </p>
      </div>
      <div className="block">
        <Modal options={contactModalConfiguration} render={renderContactForm()}>
          <button className="button">Написать нам</button>
        </Modal>
      </div>
    </div>
  );
};

export default About;
