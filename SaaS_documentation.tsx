import React, { useState, useEffect } from 'react';
import { FileText, Download, Search, ChevronRight, Code, Database, Cloud, Shield, Layers, GitBranch } from 'lucide-react';

const DocumentationHub = () => {
  const [selectedDoc, setSelectedDoc] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState('');
  const [documentContent, setDocumentContent] = useState({});

  const documents = [
    { id: 'overview', title: 'Architecture Overview', icon: Layers, category: 'Architecture' },
    { id: 'microservices', title: 'Microservices Design', icon: GitBranch, category: 'Architecture' },
    { id: 'data-ingestion', title: 'Data Ingestion Service', icon: Database, category: 'Services' },
    { id: 'migration-analytics', title: 'Migration Analytics Service', icon: Code, category: 'Services' },
    { id: 'child-welfare', title: 'Child Welfare Service', icon: Code, category: 'Services' },
    { id: 'scm-resources', title: 'SCM Resource Allocation', icon: Layers, category: 'SCM' },
    { id: 'scm-logistics', title: 'SCM Logistics Routes', icon: Layers, category: 'SCM' },
    { id: 'security', title: 'Security Compliance', icon: Shield, category: 'Security' },
    { id: 'deployment', title: 'Deployment DevOps', icon: Cloud, category: 'DevOps' },
    { id: 'implementation', title: 'Implementation Guide', icon: FileText, category: 'Guides' }
  ];

  useEffect(() => {
    const initialContent = {
      'overview': {
        title: 'SaaS Architecture Overview',
        content: `# Aadhaar Analytics Platform - Complete Architecture

## Executive Summary
Transform the monolithic Aadhaar analyzer into a cloud-native, multi-tenant SaaS platform.

## Core Architecture Components

### 1. Microservices Layer
- Data Ingestion Service
- Migration Analytics Service
- Child Welfare Analytics Service
- Anomaly Detection Service
- Tenant Management Service
- Notification Alert Service
- Visualization Service
- API Gateway

### 2. Data Layer
- Raw Data Lake (S3/Azure Blob)
- Operational Database (PostgreSQL Multi-tenant)
- Analytics Database (MongoDB)
- Cache Layer (Redis)
- Message Queue (Apache Kafka)

### 3. Application Layer
- RESTful APIs
- WebSocket for real-time updates
- GraphQL for flexible queries
- Batch Processing Jobs

## Key Features

### Migration Intelligence
- Real-time hotspot detection
- Predictive migration patterns
- District-level intensity scoring

### Child Welfare Analytics
- Biometric compliance tracking
- Service gap identification
- Intervention planning

### SCM Integration
- Resource allocation optimization
- Logistics route planning
- Demand forecasting

## Technology Stack
- Backend: Java 17, Spring Boot 3.x
- Message Queue: Apache Kafka
- Databases: PostgreSQL, MongoDB, Redis
- Container: Docker
- Orchestration: Kubernetes`
      },
      'microservices': {
        title: 'Microservices Design',
        content: `# Microservices Architecture Design

## Design Principles

### 1. Single Responsibility
Each microservice handles one business capability

### 2. Database Per Service
Each service owns its data

### 3. API-First Design
All services expose REST/gRPC APIs

## Service Catalog

### Data Ingestion Service
Port: 8081
Endpoints:
- POST /api/v1/ingest/csv
- POST /api/v1/ingest/stream
- GET /api/v1/ingest/status/{jobId}

### Migration Analytics Service
Port: 8082
Endpoints:
- POST /api/v1/migration/analyze
- GET /api/v1/migration/hotspots
- GET /api/v1/migration/intensity/{district}`
      },
      'data-ingestion': {
        title: 'Data Ingestion Service',
        content: `# Data Ingestion Service

## Overview
Handles all data intake from CSV files and streaming APIs.

## API Specifications

### Upload CSV Endpoint
POST /api/v1/ingest/csv
Content-Type: multipart/form-data

Headers:
- X-Tenant-ID: tenant identifier
- Authorization: Bearer token

Body:
- file: binary CSV file
- dataset_type: ENROLMENT | DEMOGRAPHIC | BIOMETRIC

Response:
{
  "jobId": "uuid-1234",
  "status": "PROCESSING"
}`
      },
      'migration-analytics': {
        title: 'Migration Analytics Service',
        content: `# Migration Analytics Service

## Core Functionality
Analyzes migration patterns using demographic update data

## Key Metrics

### Migration Intensity Score
Formula: demographic_updates_18+ / (new_enrolments_18+ + 1)

Categories:
- EXTREME: > 1000 (Critical hotspot)
- HIGH: 100-1000 (Significant activity)
- MODERATE: 10-100 (Notable patterns)
- LOW: 0-10 (Stable population)`
      },
      'child-welfare': {
        title: 'Child Welfare Analytics Service',
        content: `# Child Welfare Analytics Service

## Purpose
Track biometric update compliance for children aged 5-17

## Compliance Analysis

### Compliance Ratio
Formula: biometric_updates_5_17 / (enrolment_0_5 + enrolment_5_17)

Risk Levels:
- CRITICAL: 0-30% (Immediate intervention)
- HIGH: 30-50% (Urgent action needed)
- MODERATE: 50-70% (Monitoring required)
- LOW: 70-100% (Healthy compliance)`
      },
      'scm-resources': {
        title: 'SCM Resource Allocation',
        content: `# SCM Resource Allocation Service

## Overview
Optimizes allocation of physical resources

## Resource Types
- Mobile Aadhaar Vans
- Biometric Kits
- Staff Resources

## Allocation Algorithm
Combines multiple factors:
- Migration intensity score (40%)
- Child compliance gap (40%)
- Population density (10%)
- Historical demand (10%)`
      },
      'scm-logistics': {
        title: 'SCM Logistics Routes',
        content: `# SCM Logistics Route Optimization

## Purpose
Optimize travel routes for mobile vans

## Route Optimization
Uses Vehicle Routing Problem (VRP) with time windows

### Factors Considered
- Distance between locations
- Traffic conditions
- Service time at each location
- Vehicle capacity`
      },
      'security': {
        title: 'Security Compliance',
        content: `# Security Compliance Framework

## Authentication Authorization

### OAuth 2.0 JWT
- Token-based authentication
- Role-based access control (RBAC)
- Token expiry: 1 hour

## Data Protection

### Encryption
At Rest: AES-256 encryption
In Transit: TLS 1.3

### Data Masking
- PII fields masked in logs
- Anonymization for analytics`
      },
      'deployment': {
        title: 'Deployment DevOps',
        content: `# Deployment DevOps Guide

## Docker Configuration
Multi-container setup for local development

## Kubernetes Deployment

### Deployment Strategy
- Rolling updates (zero downtime)
- Blue-green deployment
- Canary releases

### Resource Configuration
Requests:
- CPU: 500m per service
- Memory: 512Mi per service

## Monitoring
- Prometheus Metrics
- Grafana Dashboards
- ELK Stack for logging`
      },
      'implementation': {
        title: 'Implementation Guide',
        content: `# Implementation Guide - 12 Week Plan

## Phase 1: Foundation (Weeks 1-4)

### Week 1-2: Architecture Setup
Tasks:
- Set up cloud infrastructure
- Configure databases
- Deploy Kafka cluster

### Week 3-4: Core Services
Tasks:
- Implement Data Ingestion Service
- Implement Tenant Management
- Set up API Gateway

## Phase 2: Analytics Services (Weeks 5-8)

### Week 5-6: Migration Analytics
- Build REST APIs
- Implement Kafka consumers

### Week 7-8: Child Welfare Analytics
- Build compliance engine
- Create alert system

## Phase 3: SCM Features (Weeks 9-10)
- Resource Allocation Service
- Route Optimization Service

## Phase 4: Production Ready (Weeks 11-12)
- Security hardening
- Monitoring setup
- Production deployment`
      }
    };
    setDocumentContent(initialContent);
  }, []);

  const startEditing = () => {
    if (documentContent[selectedDoc]) {
      setEditedContent(documentContent[selectedDoc].content);
      setIsEditing(true);
    }
  };

  const saveEdit = () => {
    setDocumentContent(prev => ({
      ...prev,
      [selectedDoc]: {
        ...prev[selectedDoc],
        content: editedContent
      }
    }));
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditedContent('');
  };

  const downloadDoc = () => {
    if (!documentContent[selectedDoc]) return;
    
    const content = isEditing ? editedContent : documentContent[selectedDoc].content;
    const title = documentContent[selectedDoc].title;
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title.replace(/\s+/g, '_')}_${selectedDoc}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const categories = [...new Set(documents.map(d => d.category))];

  const filteredDocs = documents.filter(doc =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="w-80 bg-white border-r border-slate-200 overflow-y-auto shadow-lg">
        <div className="p-6 border-b border-slate-200 bg-gradient-to-r from-blue-600 to-indigo-600">
          <h1 className="text-2xl font-bold text-white mb-2">SaaS Documentation</h1>
          <p className="text-blue-100 text-sm">Complete Architecture Guide</p>
        </div>

        <div className="p-4 border-b border-slate-200">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search docs..."
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="p-4">
          {categories.map(category => (
            <div key={category} className="mb-6">
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2 px-2">
                {category}
              </h3>
              {filteredDocs
                .filter(doc => doc.category === category)
                .map(doc => {
                  const Icon = doc.icon;
                  return (
                    <button
                      key={doc.id}
                      onClick={() => setSelectedDoc(doc.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 mb-1 rounded-lg transition-all ${
                        selectedDoc === doc.id
                          ? 'bg-blue-50 text-blue-700 font-medium'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <Icon className="h-4 w-4 flex-shrink-0" />
                      <span className="text-sm text-left flex-1">{doc.title}</span>
                      {selectedDoc === doc.id && (
                        <ChevronRight className="h-4 w-4 flex-shrink-0" />
                      )}
                    </button>
                  );
                })}
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-hidden flex flex-col">
        <div className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between shadow-sm">
          <h2 className="text-2xl font-bold text-slate-800">
            {documentContent[selectedDoc]?.title || 'Loading...'}
          </h2>
          <div className="flex gap-3">
            {!isEditing ? (
              <>
                <button
                  onClick={startEditing}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <FileText className="h-4 w-4" />
                  Edit for My Scenario
                </button>
                <button
                  onClick={downloadDoc}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Download className="h-4 w-4" />
                  Download
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={cancelEdit}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-500 text-white rounded-lg hover:bg-slate-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={saveEdit}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Save Changes
                </button>
              </>
            )}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-8">
          {documentContent[selectedDoc] && (
            <div className="max-w-4xl bg-white rounded-xl shadow-lg p-8">
              {!isEditing ? (
                <>
                  <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-blue-800">
                      💡 <strong>Tip:</strong> Click "Edit for My Scenario" to customize this documentation 
                      for your specific Aadhaar Analytics project requirements.
                    </p>
                  </div>
                  <pre className="whitespace-pre-wrap font-mono text-sm text-slate-700 leading-relaxed">
                    {documentContent[selectedDoc].content}
                  </pre>
                </>
              ) : (
                <>
                  <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm text-green-800">
                      ✏️ <strong>Edit Mode:</strong> Customize this documentation to match your project needs. 
                      Changes will be saved when you click "Save Changes".
                    </p>
                  </div>
                  <textarea
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                    className="w-full h-[calc(100vh-280px)] p-4 border border-slate-300 rounded-lg font-mono text-sm text-slate-700 leading-relaxed focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                    placeholder="Edit your documentation here..."
                  />
                </>
              )}
            </div>
          )}
        </div>
        <footer className="bg-white border-t border-slate-200 px-8 py-4 shadow-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="text-sm text-slate-600">
              <p>© 2026 SaaS Documentation Hub. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-600">
              <a href="#" className="hover:text-blue-600 transition-colors">Documentation</a>
              <a href="#" className="hover:text-blue-600 transition-colors">API Reference</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Support</a>
              <span className="text-slate-400">v1.0.0</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default DocumentationHub;