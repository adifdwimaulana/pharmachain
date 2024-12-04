import useAuth from '@/hooks/useAuth';
import { User } from '@/models/User';
import { updateUserQuery } from '@/services/user-service';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type UserInput = {
  username: string;
  email: string;
  role: string;
  address: string;
  isAuthorize: boolean;
};

const CompleteRegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState<UserInput>({
    username: '',
    email: '',
    role: '',
    address: '',
    isAuthorize: false,
  });
  const { user } = useAuth();
  const { updateUser } = updateUserQuery();

  const [error, setError] = useState<string | null>(null);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if all fields are filled
    const { username, email, role, address } = formData;

    if (username && email && role && address) {
      const finalData: User = {
        internet_identity: user?.internet_identity!,
        ...formData,
        isAuthorize: true, // Derived directly
      };

      setError(null);
      console.log('Form submitted with data:', finalData);

      const result = await updateUser([finalData]);

      if (!result || 'err' in result) {
        setError(result?.err!);
        return;
      }

      window.location.reload();
    } else {
      setError('All fields are required.');
    }
  };

  return (
    <div className="bg-red">
      <h2>User Form</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="role">Role</label>
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CompleteRegistrationPage;
