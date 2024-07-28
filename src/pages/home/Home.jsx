import React, { useEffect } from 'react'

import Markdown from "markdown-to-jsx";
import hljs from "highlight.js";
// import 'highlight.js/styles/github.css';
import "highlight.js/styles/atom-one-dark.css"; // You can choose different themes here

import { useAuth } from "../../context/AuthProvider";

const markdownContent = `
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
| Cell 7   | Cell 8   | Cell 9   |
`;

const scriptMarkdownContent = `
\`\`\`sh
#!/bin/bash
echo "Hello, World!"
mkdir my_directory
cd my_directory
touch my_file.txt
echo "This is a sample file" > my_file.txt
cat my_file.txt
\`\`\`
`;

const javaMarkdownContent = `
\`\`\`java
public class Main {

  // This is the main function of the application
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}
\`\`\`
`;

const patientMarkdownContent = `
## Hospital Patient List

Below is the list of patients currently admitted:

| **Patient Name** | **Age** | **Condition**     | **Room Number** |
|------------------|---------|-------------------|-----------------|
| John Doe         | 45      | Heart Disease     | 101             |
| Jane Smith       | 38      | Pneumonia         | 102             |
| Mary Johnson     | 60      | Diabetes          | 103             |
| James Williams   | 50      | Kidney Failure    | 104             |
| Patricia Brown   | 70      | Alzheimer's       | 105             |

<div class="notes">
### 📝 Notes:
- **John Doe:** Needs special attention for his heart condition.
- **Jane Smith:** Recovering well, scheduled for discharge soon.
- **Mary Johnson:** Requires regular insulin injections.
- **James Williams:** On dialysis, monitor fluid intake.
- **Patricia Brown:** Needs assistance with daily activities.
</div>

**📞 Contact Information:**
- **Nurse in Charge:** Emily Clark
- **Phone:** (123) 456-7890
- **Email:** emily.clark@hospital.com
`;


const LoginComponent = () => {
  const { login } = useAuth();

  const handleLogin = async () => {
    const username = "user";
    const password = "password";
    await login(username, password);
  };

  return <button onClick={handleLogin}>Login</button>;
};

const ProtectedComponent = () => {
  const { authState } = useAuth();

  if (!authState.isAuthenticated) {
    return <div>Please log in to access this content.</div>;
  }

  return <div>Protected content</div>;
};



const Home = () => {
  
  useEffect(() => {
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightBlock(block);
    });
  }, []);

  return (
      <div style={{padding: "20px"}}>
        <LoginComponent />
      <ProtectedComponent />

      <h1>Markdown to JSX Table Example</h1>
      <Markdown>{markdownContent}</Markdown>

      <br />
      <h1>Markdown to Shell Script Code Block Example</h1>
      <Markdown>{scriptMarkdownContent}</Markdown>

      <br />
      <h1>Markdown to Java Code Block Example</h1>
      <Markdown>{javaMarkdownContent}</Markdown>

      <br />
      <h1>Hospital Patient Management System</h1>
      <Markdown>{patientMarkdownContent}</Markdown>

      </div>
  )
}

export default Home