import { Text, List, ListItem, Label } from '~/client/ui/components'

const FEATURE_CARD_CONFIG = [
	{
		icon: 'clock-12',
		title: 'Регистрация в течение 30 минут',
		description: 'Нужен паспорт, В/У категории В и банковская карта',
	},
	{
		icon: 'smartphone',
		title: 'Аренда в мобильном приложении',
		description: 'Выбирайте авто на карте и бронируйте его для поездки',
	},
	{
		icon: 'clock-6',
		title: 'Круглосуточная онлайн поддержка',
		description: 'Где вы можете задать любые интересующие вопросы',
	},
	{
		icon: 'fuel',
		title: 'Бензин оплачиваем мы!',
		description: 'Заправляйтесь за наш счет по топливной карте',
	},
] as const

const BUSINESS_REGISTRATION_OPTIONS = [
	'Фото последнего разворота паспорта',
	'Фото паспорта с отметкой о регистрации',
	'Фото водительского удостоверения с обеих сторон',
	'Селфи с ВУ или паспортом',
] as const

const FEATURE_BUSINESS_CARD_CONFIG = [
	{
		icon: 'clock-12',
		title: 'Быстрая регистрация в виде чата',
		children: (
			<>
				<Text className="mb-5">Регистрация в нашем приложении занимает до 30 минут.</Text>
				<Label color="default">Для этого необходимо выслать:</Label>
				<List>
					{BUSINESS_REGISTRATION_OPTIONS.map((option, key) => (
						<ListItem key={key}>{option}</ListItem>
					))}
				</List>
			</>
		),
	},
	{
		icon: 'smartphone',
		title: 'Личный кабинет',
		description: 'Через личный кабинет можно добавлять сотрудников и управлять лимитами.',
	},
	{
		icon: 'gallery-horizontal-end',
		title: 'Большой выбор тарифов',
		description:
			'У нас доступны следующие тарифы: **минутный, минуты и км, часы и км, сутки и км.**',
	},
	{
		icon: 'scroll-text',
		title: 'Предоставление отчёта',
		description: 'Ежемесячный отчёт предоставляется до **15 числа.**',
	},
	{
		icon: 'blocks',
		title: 'Быстрая интеграция',
		description:
			'Свяжитесь с нами по номеру **+375 44 777 60 60** можно (Telegram или WhatsApp) и заключить договор.',
	},
] as const

export { FEATURE_CARD_CONFIG, FEATURE_BUSINESS_CARD_CONFIG }
