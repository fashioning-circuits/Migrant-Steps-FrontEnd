// ApiTest.js
import React, { useState, useEffect } from 'react';

const ApiTest = () => {
    const [status, setStatus] = useState('Loading...');
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Test the connection when component mounts
        testApiConnection();
    }, []);

    const testApiConnection = async () => {
        try {
            setStatus('Testing connection to backend...');

            // Make a request to your /excerpts endpoint
            const response = await fetch('/excerpts');

            // Check if the request was successful
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Parse the JSON response
            const result = await response.json();

            // Update state with the result
            setData(result);
            setStatus('Connection successful!');
        } catch (err) {
            console.error('Connection test failed:', err);
            setError(err.message);
            setStatus('Connection failed!');
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h2>Backend Connection Test</h2>
            <div style={{
                padding: '10px',
                backgroundColor: status === 'Connection successful!' ? '#d4edda' :
                    status === 'Connection failed!' ? '#f8d7da' : '#fff3cd',
                borderRadius: '4px',
                marginBottom: '20px'
            }}>
                <strong>Status:</strong> {status}
                {error && <div style={{ color: 'red', marginTop: '10px' }}><strong>Error:</strong> {error}</div>}
            </div>

            <button
                onClick={testApiConnection}
                style={{
                    padding: '8px 16px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                Test Connection Again
            </button>

            {data && (
                <div style={{ marginTop: '20px' }}>
                    <h3>Response Data:</h3>
                    <pre style={{
                        backgroundColor: '#f8f9fa',
                        padding: '15px',
                        borderRadius: '4px',
                        overflowX: 'auto'
                    }}>
            {JSON.stringify(data, null, 2)}
          </pre>
                </div>
            )}
        </div>
    );
};

export default ApiTest;