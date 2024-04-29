import React, { useState } from 'react';
import { Grid, Checkbox, FormControlLabel, Paper, IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const swapArrayElements = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
};

const SortableList = () => {
    const initialItems = Array.from({ length: 20 }, (_, i) => ({
        id: `item-${i + 1}`,
        label: `Activity ${i + 1}`,
        checked: false
    }));

    const [items, setItems] = useState(initialItems);

    const handleCheckboxChange = (id) => (event) => {
        setItems(items.map(item => item.id === id ? { ...item, checked: event.target.checked } : item));
    };

    const onDragOver = (event) => {
        event.preventDefault();
    };

    const onDrop = (event, dropIndex, column) => {
        event.preventDefault();
        const dragIndex = parseInt(event.dataTransfer.getData("drag-item-index"), 10);
        const dragColumn = event.dataTransfer.getData("drag-column");

        const adjustedDropIndex = column === 'second' ? dropIndex + Math.ceil(items.length / 2) : dropIndex;
        const adjustedDragIndex = dragColumn === 'second' ? dragIndex + Math.ceil(items.length / 2) : dragIndex;

        if (adjustedDropIndex !== adjustedDragIndex) {
            swapArrayElements(items, adjustedDropIndex, adjustedDragIndex);
            setItems([...items]);
        }
    };

    const renderItem = (item, index, column) => (
        <Grid item xs={12} key={item.id} draggable
              onDragStart={(e) => {
                  e.dataTransfer.setData("drag-item-index", index);
                  e.dataTransfer.setData("drag-column", column);
              }}
              onDragOver={onDragOver}
              onDrop={(e) => onDrop(e, index, column)}
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', marginBottom: '8px' }}
        >
            <Paper style={{ width: '100%', padding: '8px', boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                    <span style={{ marginRight: '8px' }}>{index + 1 + (column === 'second' ? Math.ceil(items.length / 2) : 0)}.</span>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={item.checked}
                                onChange={handleCheckboxChange(item.id)}
                                color="primary"
                            />
                        }
                        label={item.label}
                    />
                </div>
                <div>
                    <IconButton size="small" style={{ marginRight: '4px' }}>
                        <ArrowUpwardIcon />
                    </IconButton>
                    <IconButton size="small">
                        <ArrowDownwardIcon />
                    </IconButton>
                </div>
            </Paper>
        </Grid>
    );

    const halfwayIndex = Math.ceil(items.length / 2);
    const firstHalfItems = items.slice(0, halfwayIndex);
    const secondHalfItems = items.slice(halfwayIndex);

    return (
        <Grid container spacing={2} style={{ paddingLeft: '20px', paddingTop: '20px' }}>
            <Grid item xs={6} onDragOver={onDragOver}>
                {firstHalfItems.map((item, index) => renderItem(item, index, 'first'))}
            </Grid>
            <Grid item xs={6} onDragOver={onDragOver} >
                {secondHalfItems.map((item, index) => renderItem(item, index, 'second'))}
            </Grid>
        </Grid>
    );
};

export default SortableList;
