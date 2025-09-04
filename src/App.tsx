import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import MissionPage from "./pages/MissionPage";
import VisionPage from "./pages/VisionPage";
import HistoryPage from "./pages/HistoryPage";
import PanelPage from "./pages/PanelPage";
import TeamPage from "./pages/TeamPage";
import ExecutivePage from "./pages/ExecutivePage";
import AdvisoryPage from "./pages/AdvisoryPage";
import FacultyPage from "./pages/FacultyPage";
import EventsPage from "./pages/EventsPage";
import UpcomingEventsPage from "./pages/UpcomingEventsPage";
import PastEventsPage from "./pages/PastEventsPage";
import WorkshopsPage from "./pages/WorkshopsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ResearchProjectsPage from "./pages/ResearchProjectsPage";
import StudentProjectsPage from "./pages/StudentProjectsPage";
import CompletedProjectsPage from "./pages/CompletedProjectsPage";
import PublicationsPage from "./pages/PublicationsPage";
import ResearchPapersPage from "./pages/ResearchPapersPage";
import JournalArticlesPage from "./pages/JournalArticlesPage";
import ConferencePapersPage from "./pages/ConferencePapersPage";
import JoinUsPage from "./pages/JoinUsPage";
import ContactPage from "./pages/ContactPage";
import ClubPartnerPage from "./pages/ClubPartnerPage";
import CampusAmbassadorPage from "./pages/CampusAmbassadorPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicesPage from "./pages/TermsOfServicesPage";
import NotFound from "./pages/NotFound";
import PageViewTracker from "./components/analytics/PageViewTracker";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PageViewTracker />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/mission" element={<MissionPage />} />
          <Route path="/about/vision" element={<VisionPage />} />
          <Route path="/about/history" element={<HistoryPage />} />
          <Route path="/panel" element={<PanelPage />} />
          <Route path="/panel/executive" element={<ExecutivePage />} />
          <Route path="/panel/advisory" element={<AdvisoryPage />} />
          <Route path="/panel/faculty" element={<FacultyPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/upcoming-events" element={<UpcomingEventsPage />} />
          <Route path="/events/past-events" element={<PastEventsPage />} />
          <Route path="/events/workshops" element={<WorkshopsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/research-projects" element={<ResearchProjectsPage />} />
          <Route path="/projects/student-projects" element={<StudentProjectsPage />} />
          <Route path="/projects/completed-projects" element={<CompletedProjectsPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/publications/research-papers" element={<ResearchPapersPage />} />
          <Route path="/publications/journal-articles" element={<JournalArticlesPage />} />
          <Route path="/publications/conference-papers" element={<ConferencePapersPage />} />
          <Route path="/join-us" element={<JoinUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-services" element={<TermsOfServicesPage />} />
          <Route path="/leaderboard/club-partner" element={<ClubPartnerPage />} />
          <Route path="/leaderboard/campus-ambassador" element={<CampusAmbassadorPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    
  </QueryClientProvider>
);

export default App;
