import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import '../styles.css'

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    institution: '',
    teamSize: '1',
    projectIdea: '',
    experience: '',
    requirements: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.institution.trim()) {
      newErrors.institution = 'Institution is required';
    }
    
    if (!formData.projectIdea.trim()) {
      newErrors.projectIdea = 'Project idea is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      // Add your submission logic here
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-[#fff8e6] py-16">
      <div className="max-w-3xl mx-auto px-4">
        <Card className="bg-[#fffdf7] shadow-lg border border-[#daa52019]">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-[#2d2d2d]">
              Register for Ideathon
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={errors.fullName ? 'border-red-500' : ''}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">{errors.fullName}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'border-red-500' : ''}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="institution">Institution/Organization</Label>
                <Input
                  id="institution"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  className={errors.institution ? 'border-red-500' : ''}
                />
                {errors.institution && (
                  <p className="text-red-500 text-sm">{errors.institution}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="teamSize">Team Size</Label>
                <Select 
                  value={formData.teamSize}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, teamSize: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select team size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Individual</SelectItem>
                    <SelectItem value="2">2 Members</SelectItem>
                    <SelectItem value="3">3 Members</SelectItem>
                    <SelectItem value="4">4 Members</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectIdea">Project Idea (Brief Description)</Label>
                <Textarea
                  id="projectIdea"
                  name="projectIdea"
                  value={formData.projectIdea}
                  onChange={handleChange}
                  className={`min-h-[100px] ${errors.projectIdea ? 'border-red-500' : ''}`}
                />
                {errors.projectIdea && (
                  <p className="text-red-500 text-sm">{errors.projectIdea}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Relevant Experience (Optional)</Label>
                <Textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="requirements">Special Requirements (Optional)</Label>
                <Textarea
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  className="min-h-[100px]"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-[#b8860b] hover:bg-[#8b6508] text-white"
              >
                Submit Registration
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegistrationForm;