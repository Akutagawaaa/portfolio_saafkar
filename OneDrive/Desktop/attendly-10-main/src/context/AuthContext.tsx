
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";

// Mock user types
export interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "employee";
  department?: string;
  avatarUrl?: string;
  organizationLogo?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  loginWithOTP: (email: string) => Promise<void>;
  verifyOTP: (email: string, otp: string) => Promise<void>;
  logout: () => void;
  isAdmin: boolean;
  updateOrganizationLogo: (logoUrl: string) => void;
}

interface OTPRecord {
  email: string;
  otp: string;
  expiresAt: number;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [otpRecords, setOtpRecords] = useState<OTPRecord[]>([]);
  const isAdmin = user?.role === "admin";

  // Check if the user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    
    setLoading(false);
  }, []);

  // Mock login function - in a real app, this would call an API
  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Mock login logic
      const mockUsers: User[] = [
        { id: 1, name: "Alex Johnson", email: "employee@example.com", role: "employee", department: "Engineering" },
        { id: 2, name: "Emma Williams", email: "admin@example.com", role: "admin", department: "HR", organizationLogo: "https://i.pravatar.cc/150?img=2" },
      ];
      
      const foundUser = mockUsers.find((u) => u.email === email);
      
      if (!foundUser) {
        throw new Error("Invalid email or password");
      }
      
      // Save to local storage
      localStorage.setItem("user", JSON.stringify(foundUser));
      setUser(foundUser);
      
    } catch (error) {
      console.error("Login failed", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Mock Google login
  const loginWithGoogle = async () => {
    try {
      setLoading(true);
      
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Mock Google login response
      const mockGoogleUser: User = {
        id: 3,
        name: "Sarah Chen",
        email: "sarah@example.com",
        role: "employee",
        department: "Design",
        avatarUrl: "https://i.pravatar.cc/150?img=5",
      };
      
      // Save to local storage
      localStorage.setItem("user", JSON.stringify(mockGoogleUser));
      setUser(mockGoogleUser);
      
    } catch (error) {
      console.error("Google login failed", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Login with OTP
  const loginWithOTP = async (email: string) => {
    try {
      setLoading(true);
      
      // Generate 6 digit OTP
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      const expiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes
      
      // Store OTP in local state (in a real app, this would be stored in a database)
      const newOtpRecord: OTPRecord = { email, otp, expiresAt };
      setOtpRecords([...otpRecords.filter(record => record.email !== email), newOtpRecord]);
      
      // Log OTP to console (in a real app, this would send an email)
      console.log(`Your OTP for ${email} is: ${otp}`);
      toast.info(`OTP has been sent to ${email}. Check console for the OTP.`);
      
    } catch (error) {
      console.error("OTP request failed", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Verify OTP and login
  const verifyOTP = async (email: string, otp: string) => {
    try {
      setLoading(true);
      
      // Find the OTP record
      const otpRecord = otpRecords.find(record => record.email === email);
      
      if (!otpRecord) {
        throw new Error("No OTP was requested for this email");
      }
      
      if (Date.now() > otpRecord.expiresAt) {
        throw new Error("OTP has expired. Please request a new one");
      }
      
      if (otpRecord.otp !== otp) {
        throw new Error("Invalid OTP");
      }
      
      // OTP is valid, proceed with login
      // Mock user lookup
      const mockUsers: User[] = [
        { id: 1, name: "Alex Johnson", email: "employee@example.com", role: "employee", department: "Engineering" },
        { id: 2, name: "Emma Williams", email: "admin@example.com", role: "admin", department: "HR", organizationLogo: "https://i.pravatar.cc/150?img=2" },
      ];
      
      const foundUser = mockUsers.find((u) => u.email === email);
      
      if (!foundUser) {
        // Create a new user if not found
        const newUser: User = {
          id: Math.floor(Math.random() * 1000) + 10,
          name: email.split('@')[0],
          email,
          role: "employee",
          department: "New Hire",
        };
        
        localStorage.setItem("user", JSON.stringify(newUser));
        setUser(newUser);
      } else {
        localStorage.setItem("user", JSON.stringify(foundUser));
        setUser(foundUser);
      }
      
      // Remove the used OTP
      setOtpRecords(otpRecords.filter(record => record.email !== email));
      
    } catch (error) {
      console.error("OTP verification failed", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  // Update organization logo (for admin users)
  const updateOrganizationLogo = (logoUrl: string) => {
    if (!user || user.role !== "admin") return;
    
    const updatedUser = { ...user, organizationLogo: logoUrl };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  const value = {
    user,
    loading,
    login,
    loginWithGoogle,
    loginWithOTP,
    verifyOTP,
    logout,
    isAdmin,
    updateOrganizationLogo,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  
  return context;
};
