export interface UserProfile {
  name: string;
  lastName: string;
  email: string;
  dateFrom: string;
  dateTo: string;
  status: string;
}

const baseUrl = "http://localhost:5173";

async function getUserProfile(): Promise<UserProfile> {
  const response = await fetch(`${baseUrl}/requests`);

  if (!response.ok) throw new Error("Failed to fetch user profile");

  return response.json();
}

async function updateUserProfile(
  newData: UserProfile
): Promise<{ message: string }> {
  const response = await fetch(`${baseUrl}/requests`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  });

  if (!response.ok) throw new Error("Failed to update user profile");

  return response.json();
}

export const apiService = {
  getUserProfile,
  updateUserProfile,
};
