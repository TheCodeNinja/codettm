

```sql
CREATE TABLE incidents (
    id VARCHAR(10) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    priority VARCHAR(10) NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO incidents (incidentNo, title, description, priority) VALUES
('INC001', 'Server Down', 'Main server is not responding.', 'High'),
('INC002', 'Email Issue', 'Unable to send emails.', 'Medium'),
('INC003', 'Login Failure', 'Users cannot log in to the system.', 'High'),
('INC004', 'Network Latency', 'Slow network response time.', 'Low'),
('INC005', 'Printer Offline', 'Office printer is offline.', 'Low'),
('INC006', '伺服器故障', '主要伺服器沒有反應。', '高'),
('INC007', '電郵問題', '無法發送電郵。', '中'),
('INC008', '登入失敗', '用戶無法登入系統。', '高');
```