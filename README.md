# React Draggable Sortable List

React Draggable Sortable List is a dynamic and user-friendly web application that allows users to manage a list of items efficiently. With its intuitive drag-and-drop interface, users can seamlessly organize their list, prioritize items, and track progress in real-time.

## Key Features

- **Drag-and-Drop Interface**: Effortlessly move items within the list with a simple drag-and-drop action.
- **Item Selection**: Select items using checkboxes for easy identification and management.
- **Persistent State**: The state of the list is maintained using React’s state management, ensuring continuity even after refreshing or closing the app.
- **Modular Structure**: The application is built using modular React components, allowing for clear organization and easy customization.

## Core Logic

The core logic of the application is implemented in the `SortableList` component. Here’s a brief overview of how it works:

- **State Initialization**: The initial state of the list is set using the `useState` hook from React. Each item in the list has an `id`, `label`, and `checked` property.

- **Drag and Drop**: The `onDragStart` event is used to store the index of the dragged item and its column. The `onDrop` event is used to swap the dragged item with the dropped item using the `swapArrayElements` function.

- **Checkbox Change**: The `handleCheckboxChange` function is used to update the `checked` property of an item when its checkbox is toggled.

- **Rendering Items**: The `renderItem` function is used to render each item in the list. It sets up the necessary drag-and-drop events and renders the item’s checkbox and label.

- **List Splitting**: The list of items is split into two halves, which are rendered in separate columns. This is done in the return statement of the `SortableList` component.

## Technologies Used

- **React**: A powerful JavaScript library for building user interfaces, ensuring a smooth and responsive user experience.
- **JavaScript**: The primary programming language used for building the application logic and implementing advanced features.
- **Material-UI**: A popular React UI framework used for designing a visually appealing user interface.

## Getting Started

To run the React Draggable Sortable List locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/React-Draggable-Sortable-List.git`
2. Navigate to the project directory: `cd React-Draggable-Sortable-List`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the app.

<img width="1242" alt="Screenshot 2024-04-29 at 12 14 11 PM" src="https://github.com/shuddha2021/react-sortable-list-1/assets/81951239/7da63b41-7c5e-4150-bef3-1cc3f4e34118">


## Contributing

Contributions to the React Draggable Sortable List are highly welcomed! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request. Together, we can make this app even better and help more users manage their lists efficiently.

## License

This project is licensed under the MIT License. For more information, see the LICENSE file.

## Acknowledgments

- **React Documentation**: A comprehensive resource for learning React.
- **Material-UI Documentation**: For guidance on using the Material-UI framework.
- **Open-Source Community**: For providing resources and platforms that make collaborative projects possible.

Streamline your list management with React Draggable Sortable List! Enjoy using the app to organize your items efficiently.
