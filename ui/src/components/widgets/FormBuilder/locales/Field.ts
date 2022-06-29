export const Field = {
    'ru-RU': {
        settings: {
            name: 'Имя',
            title: 'Заголовок',
            required: 'Обязательное',
            description: 'Описание',
            default: 'Значение по умолчанию',
            enum: 'Опции',
            'x-display': {
                title: 'Состояние отображения',
                tooltip:
                    'Когда отображаемое значение равно Отсутствует, данные будут «Скрытыми» и удалены. Когда отображаемое значение скрыто, будет скрыт только пользовательский интерфейс.',
                dataSource: ['Видимый', 'Скрытый', 'Отсутствует', 'Наследуемое']
            },
            'x-pattern': {
                title: 'UI шаблон',
                dataSource: ['Редактируемый', 'Недоступный', 'Только чтение', 'Удобочитаемое', 'Наследуемое']
            },
            'x-validator': 'Валидатор',
            'x-decorator': 'Декоратор',
            'x-reactions': 'Реакции',
            'field-group': 'Свойства поля',
            'component-group': 'Свойства компонента',
            'decorator-group': 'Свойства декоратора',
            'component-style-group': 'Стиль компонента',
            'decorator-style-group': 'Стиль декоратора',
            'x-component-props': {
                size: {
                    title: 'Размер',
                    dataSource: ['Большой', 'Маленький', 'По умолчанию', 'Наследуемое']
                },
                allowClear: 'Разрешить очистить',
                autoFocus: 'Автофокус',
                showSearch: 'Показать поиск',
                notFoundContent: 'Контент не найден',
                bordered: 'Окаймленный',
                placeholder: 'Плейсхолдер',
                style: {
                    width: 'Ширина',
                    height: 'Высота',
                    display: 'Отображение',
                    background: 'Фон',
                    boxShadow: 'Тень',
                    font: 'Шрифт',
                    margin: 'Внешний отступ',
                    padding: 'Внутренний отступ',
                    borderRadius: 'Радиус закругления',
                    border: 'Граница',
                    opacity: 'Непрозрачность'
                }
            },
            'x-decorator-props': {
                addonAfter: 'Добавление после',
                addonBefore: 'Добавление до',
                tooltip: 'Подсказка',
                asterisk: 'Звездочка',
                gridSpan: 'Диапазон сетки',
                labelCol: 'Именование колонки',
                wrapperCol: 'Обертка колонки',
                colon: 'Двоеточие',
                labelAlign: {
                    title: 'Выравнивание именования',
                    dataSource: ['Слева', 'Справа', 'Наследуемое']
                },
                wrapperAlign: {
                    title: 'Выравнивание обертки',
                    dataSource: ['Слева', 'Справа', 'Наследуемое']
                },
                labelWrap: 'Перенос наименования',
                wrapperWrap: 'Перенос обертки',
                labelWidth: 'Ширина наименования',
                wrapperWidth: 'Ширина обертки',
                fullness: 'Полнота',
                inset: 'Вставка',
                shallow: 'Мелкий',
                bordered: 'Окаймленный',
                size: {
                    title: 'Размер',
                    dataSource: ['Большой', 'Маленький', 'По умолчанию', 'Наследуемое']
                },
                layout: {
                    title: 'Макет',
                    dataSource: ['Вертикальный', 'Горизонтальный', 'Линейный', 'Наследуемое']
                },
                feedbackLayout: {
                    title: 'Макет обратной связи',
                    dataSource: ['Свободный', 'Сжатый', 'Всплывающий', 'Не установлено', 'Наследуемое']
                },
                tooltipLayout: {
                    title: 'Макет всплывающей подсказки',
                    dataSource: ['Значок', 'Текст', 'Наследуемое']
                },
                style: {
                    width: 'Ширина',
                    height: 'Высота',
                    display: 'Отображение',
                    background: 'Фон',
                    boxShadow: 'Тень',
                    font: 'Шрифт',
                    margin: 'Внешний отступ',
                    padding: 'Внутренний отступ',
                    borderRadius: 'Радиус закругления',
                    border: 'Граница',
                    opacity: 'Непрозрачность'
                }
            }
        }
    },
    'en-US': {
        settings: {
            name: 'Name',
            title: 'Title',
            required: 'Required',
            description: 'Description',
            default: 'Default',
            enum: 'Options',
            'x-display': {
                title: 'Display State',
                tooltip:
                    'When the display value is "None", the data will be "Hidden" and deleted. When the display value is hidden, only the UI will be hidden',
                dataSource: ['Visible', 'Hidden', 'None', 'Inherit']
            },
            'x-pattern': {
                title: 'UI Pattern',
                dataSource: ['Editable', 'Disabled', 'ReadOnly', 'ReadPretty', 'Inherit']
            },
            'x-validator': 'Validator',
            'x-decorator': 'Decorator',
            'x-reactions': 'Reactions',
            'field-group': 'Field Properties',
            'component-group': 'Component Properties',
            'decorator-group': 'Decorator Properties',
            'component-style-group': 'Component Style',
            'decorator-style-group': 'Decorator Style',
            'x-component-props': {
                size: {
                    title: 'Size',
                    dataSource: ['Large', 'Small', 'Default', 'Inherit']
                },
                allowClear: 'Allow Clear',
                autoFocus: 'Auto Focus',
                showSearch: 'Show Search',
                notFoundContent: 'Not Found Content',
                bordered: 'Bordered',
                placeholder: 'Placeholder',
                style: {
                    width: 'Width',
                    height: 'Height',
                    display: 'Display',
                    background: 'Background',
                    boxShadow: 'Box Shadow',
                    font: 'Font',
                    margin: 'Margin',
                    padding: 'Padding',
                    borderRadius: 'Radius',
                    border: 'Border',
                    opacity: 'Opacity'
                }
            },
            'x-decorator-props': {
                addonAfter: 'Addon After',
                addonBefore: 'Addon Before',
                tooltip: 'Tooltip',
                asterisk: 'Asterisk',
                gridSpan: 'Grid Span',
                labelCol: 'Label Col',
                wrapperCol: 'Wrapper Col',
                colon: 'Colon',
                labelAlign: {
                    title: 'Label Align',
                    dataSource: ['Left', 'Right', 'Inherit']
                },
                wrapperAlign: {
                    title: 'Wrapper Align',
                    dataSource: ['Left', 'Right', 'Inherit']
                },
                labelWrap: 'Label Wrap',
                wrapperWrap: 'Wrapper Wrap',
                labelWidth: 'Label Width',
                wrapperWidth: 'Wrapper Width',
                fullness: 'Fullness',
                inset: 'Inset',
                shallow: 'Shallow',
                bordered: 'Bordered',
                size: {
                    title: 'Size',
                    dataSource: ['Large', 'Small', 'Default', 'Inherit']
                },
                layout: {
                    title: 'Layout',
                    dataSource: ['Vertical', 'Horizontal', 'Inline', 'Inherit']
                },
                feedbackLayout: {
                    title: 'Feedback Layout',
                    dataSource: ['Loose', 'Terse', 'Popup', 'None', 'Inherit']
                },
                tooltipLayout: {
                    title: 'Tooltip Layout',
                    dataSource: ['Icon', 'Text', 'Inherit']
                },
                style: {
                    width: 'Width',
                    height: 'Height',
                    display: 'Display',
                    background: 'Background',
                    boxShadow: 'Box Shadow',
                    font: 'Font',
                    margin: 'Margin',
                    padding: 'Padding',
                    borderRadius: 'Radius',
                    border: 'Border',
                    opacity: 'Opacity'
                }
            }
        }
    }
}
