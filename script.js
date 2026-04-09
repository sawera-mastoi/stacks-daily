document.addEventListener('DOMContentLoaded', () => {
    const tasks = [
        { id: 1, text: 'Initialize project repository', done: true },
        { id: 2, text: 'Design premium UI system', done: true },
        { id: 4, text: 'Final push to GitHub origin', done: true }
    ];

    const tasksList = document.getElementById('tasks-list');
    const completionRate = document.getElementById('completion-rate');
    const tasksCount = document.getElementById('tasks-count');
    const streakDays = document.getElementById('streak-days');

    function renderTasks() {
        tasksList.innerHTML = '';
        tasks.forEach(task => {
            const taskEl = document.createElement('div');
            taskEl.className = `task-item ${task.done ? 'done' : ''}`;
            taskEl.innerHTML = `
                <div class="checkbox"></div>
                <div class="task-text">${task.text}</div>
            `;
            taskEl.querySelector('.checkbox').addEventListener('click', () => {
                task.done = !task.done;
                renderTasks();
                updateStats();
            });
            tasksList.appendChild(taskEl);
        });
    }

    function updateStats() {
        const finished = tasks.filter(t => t.done).length;
        const rate = Math.round((finished / tasks.length) * 100);
        
        completionRate.innerText = `${rate}%`;
        tasksCount.innerText = finished;
        streakDays.innerText = 7; // Mocked streak
    }

    // New task button
    document.getElementById('add-task-btn').addEventListener('click', () => {
        const text = prompt('Enter task name:');
        if (text) {
            tasks.push({ id: Date.now(), text, done: false });
            renderTasks();
            updateStats();
        }
    });

    renderTasks();
    updateStats();
});
// Stacks event tracking logic
function initEventTracking() { console.log('Stacks event tracking enabled'); }
initEventTracking();

// Add event listener for banner
document.querySelector('.event-banner')?.addEventListener('click', () => { alert('Navigating to Stacks event page...'); });

// Enhance stats dynamic loading
function updateStats() { document.getElementById('tasks-count').innerText = document.querySelectorAll('.task-item').length; }
setTimeout(updateStats, 500);

// Task addition logic
document.getElementById('add-task-btn')?.addEventListener('click', () => {
  const input = document.getElementById('new-task-input');
  if (input && input.value.trim()) {
    console.log('Adding task:', input.value);
    input.value = '';
  }
});

// Dark mode toggle
document.getElementById('theme-toggle')?.addEventListener('click', (e) => {
  document.body.classList.toggle('light-mode');
  e.target.innerText = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
});

// Simulated wallet connection
setTimeout(() => { const wb = document.getElementById('wallet-banner'); if(wb) wb.innerText = '✅ Wallet connected via Hiro'; }, 2000);

// Dynamic footer year
const footer = document.querySelector('.event-footer');
if(footer) footer.innerHTML = footer.innerHTML.replace('2026', new Date().getFullYear());
