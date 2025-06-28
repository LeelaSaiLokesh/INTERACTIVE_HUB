        // Generate random price data
        function generatePriceData(initialPrice, count, volatility) {
            const data = [initialPrice];
            for (let i = 1; i < count; i++) {
                const changePercent = 2 * volatility * Math.random() - volatility;
                const changeAmount = data[i-1] * changePercent / 100;
                data.push(data[i-1] + changeAmount);
            }
            return data;
        }
        
        // Generate timestamps for the last 30 days
        function generateTimestamps(count) {
            const now = new Date();
            const timestamps = [];
            for (let i = count - 1; i >= 0; i--) {
                const date = new Date(now);
                date.setDate(date.getDate() - i);
                timestamps.push(date.toLocaleDateString());
            }
            return timestamps;
        }
        
        // Initialize BTC chart
        function initBTCChart() {
            const ctx = document.getElementById('priceChart').getContext('2d');
            const initialPrice = 42890.12;
            const dataCount = 30;
            const priceData = generatePriceData(initialPrice, dataCount, 3);
            const timestamps = generateTimestamps(dataCount);
            
            // Determine if price is up or down from previous close
            const isUp = priceData[priceData.length - 1] > priceData[priceData.length - 2];
            const changePercent = ((priceData[priceData.length - 1] - priceData[priceData.length - 2]) / priceData[priceData.length - 2] * 100).toFixed(2);
            
            // Update the price display
            document.getElementById('current-price').textContent = `$${priceData[priceData.length - 1].toFixed(2)}`;
            document.getElementById('current-price').className = `price ${isUp ? 'up' : 'down'}`;
            
            // Update BTC price in market info
            document.getElementById('btc-price').textContent = `$${priceData[priceData.length - 1].toFixed(2)}`;
            
            // Create gradient for chart
            const gradient = ctx.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, isUp ? 'rgba(14, 203, 129, 0.2)' : 'rgba(246, 70, 93, 0.2)');
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: timestamps,
                    datasets: [{
                        label: 'BTC Price',
                        data: priceData,
                        borderColor: isUp ? '#0ecb81' : '#f6465d',
                        backgroundColor: gradient,
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4,
                        pointRadius: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            grid: {
                                display: false,
                                drawBorder: false
                            },
                            ticks: {
                                color: '#8a8f98'
                            }
                        },
                        y: {
                            position: 'right',
                            grid: {
                                color: '#2a2e39',
                                drawBorder: false
                            },
                            ticks: {
                                color: '#8a8f98'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            mode: 'index',
                            intersect: false,
                            backgroundColor: '#2a2e39',
                            titleColor: '#e0e0e0',
                            bodyColor: '#e0e0e0',
                            borderColor: '#6b8afd',
                            borderWidth: 1,
                            callbacks: {
                                label: function(context) {
                                    return `Price: $${context.parsed.y.toFixed(2)}`;
                                }
                            }
                        }
                    },
                    interaction: {
                        mode: 'nearest',
                        axis: 'x',
                        intersect: false
                    }
                }
            });
        }
        
        // Initialize ETH chart data (for switching)
        function initETHChart() {
            const initialPrice = 2345.67;
            const dataCount = 30;
            return generatePriceData(initialPrice, dataCount, 4);
        }
        
        // Initialize the chart when the page loads
        window.onload = function() {
            initBTCChart();
            
            // Simulate price updates
            setInterval(() => {
                const btcPriceElement = document.getElementById('btc-price');
                const ethPriceElement = document.getElementById('eth-price');
                
                // Get current prices
                let btcPrice = parseFloat(btcPriceElement.textContent.replace('$', ''));
                let ethPrice = parseFloat(ethPriceElement.textContent.replace('$', ''));
                
                // Generate small random changes
                const btcChange = btcPrice * (Math.random() * 0.2 - 0.1) / 100;
                const ethChange = ethPrice * (Math.random() * 0.3 - 0.15) / 100;
                
                // Update prices
                btcPrice += btcChange;
                ethPrice += ethChange;
                
                // Update display
                btcPriceElement.textContent = `$${btcPrice.toFixed(2)}`;
                ethPriceElement.textContent = `$${ethPrice.toFixed(2)}`;
                
                // Update change indicators
                const btcChangeElement = btcPriceElement.nextElementSibling;
                const ethChangeElement = ethPriceElement.nextElementSibling;
                
                btcChangeElement.textContent = `${btcChange >= 0 ? '+' : ''}${(btcChange / btcPrice * 10000).toFixed(2)}%`;
                ethChangeElement.textContent = `${ethChange >= 0 ? '+' : ''}${(ethChange / ethPrice * 10000).toFixed(2)}%`;
                
                if (btcChange >= 0) {
                    btcChangeElement.className = 'change up';
                } else {
                    btcChangeElement.className = 'change down';
                }
                
                if (ethChange >= 0) {
                    ethChangeElement.className = 'change up';
                } else {
                    ethChangeElement.className = 'change down';
                }
            }, 3000);
            
            // Tab switching functionality
            const tabs = document.querySelectorAll('.tab');
            tabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    tabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                });
            });
            
            // Timeframe switching functionality
            const timeframes = document.querySelectorAll('.timeframe');
            timeframes.forEach(timeframe => {
                timeframe.addEventListener('click', function() {
                    timeframes.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                });
            });
        };