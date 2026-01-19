import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Settings as SettingsIcon,
  Globe,
  Mail,
  MessageSquare,
  Palette,
  FileText,
  Database,
  Save,
} from "lucide-react";

export default function Settings() {
  return (
    <DashboardLayout>
      {/* Page header */}
      <div className="page-header">
        <div>
          <h1>System Settings</h1>
          <p className="text-muted-foreground mt-1">
            Configure platform branding, templates, and preferences
          </p>
        </div>
        <div className="action-group">
          <Button size="sm" className="gap-2">
            <Save className="w-4 h-4" />
            Save Changes
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Branding */}
          <div className="module-card">
            <div className="module-card-header flex items-center gap-2">
              <Palette className="w-5 h-5" />
              <h3 className="font-semibold">Branding</h3>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="platform-name">Platform Name</Label>
                  <Input
                    id="platform-name"
                    defaultValue="Email Awareness Micro Training"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="support-email">Support Email</Label>
                  <Input id="support-email" defaultValue="support@eamt.io" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Logo</Label>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center">
                    <Mail className="w-8 h-8" />
                  </div>
                  <Button variant="outline" size="sm">
                    Upload Logo
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="footer-text">Footer Text</Label>
                <Input
                  id="footer-text"
                  defaultValue="© 2024 EAMT. All rights reserved."
                />
              </div>
            </div>
          </div>

          {/* Email Templates */}
          <div className="module-card">
            <div className="module-card-header flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <h3 className="font-semibold">Email Templates</h3>
            </div>
            <div className="p-6 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="sender-name">Default Sender Name</Label>
                <Input id="sender-name" defaultValue="Security Training Team" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sender-email">Default Sender Email</Label>
                <Input
                  id="sender-email"
                  defaultValue="training@eamt.io"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-signature">Email Signature</Label>
                <Textarea
                  id="email-signature"
                  rows={4}
                  defaultValue="Stay secure,
The EAMT Team

This is an automated security awareness training email."
                />
              </div>
            </div>
          </div>

          {/* WhatsApp Integration */}
          <div className="module-card">
            <div className="module-card-header flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              <h3 className="font-semibold">WhatsApp CTA</h3>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Enable WhatsApp Links</p>
                  <p className="text-sm text-muted-foreground">
                    Add WhatsApp contact links to emails
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="whatsapp-number">WhatsApp Number</Label>
                <Input id="whatsapp-number" defaultValue="+1 (555) 123-4567" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="whatsapp-message">Default Message</Label>
                <Input
                  id="whatsapp-message"
                  defaultValue="Hi, I have a question about security training."
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar settings */}
        <div className="space-y-6">
          {/* Timezone & Language */}
          <div className="module-card">
            <div className="module-card-header flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <h3 className="font-semibold">Localization</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <Label>Timezone</Label>
                <select className="search-input w-full">
                  <option>UTC (Coordinated Universal Time)</option>
                  <option>EST (Eastern Standard Time)</option>
                  <option>PST (Pacific Standard Time)</option>
                  <option>GMT (Greenwich Mean Time)</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label>Language</Label>
                <select className="search-input w-full">
                  <option>English (US)</option>
                  <option>English (UK)</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label>Date Format</Label>
                <select className="search-input w-full">
                  <option>MM/DD/YYYY</option>
                  <option>DD/MM/YYYY</option>
                  <option>YYYY-MM-DD</option>
                </select>
              </div>
            </div>
          </div>

          {/* Legal Pages */}
          <div className="module-card">
            <div className="module-card-header flex items-center gap-2">
              <FileText className="w-5 h-5" />
              <h3 className="font-semibold">Legal Pages</h3>
            </div>
            <div className="p-6 space-y-3">
              <Button variant="outline" size="sm" className="w-full justify-start">
                Edit Terms of Service
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                Edit Privacy Policy
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                Edit Cookie Policy
              </Button>
            </div>
          </div>

          {/* Backup & Restore */}
          <div className="module-card">
            <div className="module-card-header flex items-center gap-2">
              <Database className="w-5 h-5" />
              <h3 className="font-semibold">Backup & Restore</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Auto Backup</p>
                  <p className="text-sm text-muted-foreground">Daily at 2:00 AM</p>
                </div>
                <Switch defaultChecked />
              </div>
              <p className="text-sm text-muted-foreground">
                Last backup: Jan 19, 2024 at 2:00 AM
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Backup Now
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Restore
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
