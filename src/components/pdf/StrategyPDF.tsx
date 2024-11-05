import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { format } from 'date-fns';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 40,
  },
  header: {
    marginBottom: 30,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    color: '#000000',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#000000',
  },
  section: {
    marginBottom: 20,
    breakInside: 'avoid',
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#000000',
    fontWeight: 'bold',
  },
  subSectionTitle: {
    fontSize: 14,
    marginBottom: 8,
    color: '#000000',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
    color: '#000000',
  },
  contentDay: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#F8FAFC',
    borderRadius: 5,
  },
  dayTitle: {
    fontSize: 14,
    marginBottom: 5,
    color: '#000000',
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    color: '#000000',
    fontSize: 10,
  },
  table: {
    display: 'table',
    width: 'auto',
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    borderBottomStyle: 'solid',
    alignItems: 'center',
    minHeight: 30,
  },
  tableCell: {
    flex: 1,
    padding: 5,
    fontSize: 10,
    color: '#000000',
  },
  tag: {
    backgroundColor: '#E6F0FF',
    padding: '3 6',
    borderRadius: 3,
    fontSize: 10,
    color: '#000000',
    marginRight: 5,
    marginBottom: 5,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#000000',
  },
  regularText: {
    color: '#000000',
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  bullet: {
    width: 10,
    fontSize: 12,
    color: '#000000',
  },
  listItemContent: {
    flex: 1,
    fontSize: 12,
    color: '#000000',
  },
  contentIdea: {
    marginTop: 10,
    padding: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  metricsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    paddingTop: 5,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },
});

interface StrategyPDFProps {
  strategy: any;
  businessInfo: any;
}

export function StrategyPDF({ strategy, businessInfo }: StrategyPDFProps) {
  const renderList = (items: string[]) => (
    items.map((item: string, index: number) => (
      <View key={index} style={styles.listItem}>
        <Text style={styles.bullet}>• </Text>
        <Text style={styles.listItemContent}>{item}</Text>
      </View>
    ))
  );

  const renderContentIdeas = (ideas: any[]) => (
    ideas.map((idea: any, index: number) => (
      <View key={index} style={styles.contentIdea}>
        <Text style={styles.subSectionTitle}>{idea.title}</Text>
        <Text style={styles.text}>{idea.description}</Text>
        
        <Text style={[styles.text, styles.boldText]}>Outline:</Text>
        {renderList(idea.outline)}
        
        <Text style={[styles.text, styles.boldText]}>Key Points:</Text>
        {renderList(idea.keyPoints)}
        
        <View style={styles.metricsContainer}>
          <Text style={styles.text}>Format: {idea.format}</Text>
          <Text style={styles.text}>Expected Engagement: {idea.estimatedEngagement}</Text>
        </View>
      </View>
    ))
  );

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Social Media Strategy</Text>
          <Text style={styles.subtitle}>Generated on {format(new Date(), 'MMMM d, yyyy')}</Text>
        </View>

        {/* Business Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Business Overview</Text>
          <View style={styles.text}>
            <Text style={styles.boldText}>Business Name: </Text>
            <Text style={styles.regularText}>{businessInfo?.businessName || 'N/A'}</Text>
          </View>
          <View style={styles.text}>
            <Text style={styles.boldText}>Industry: </Text>
            <Text style={styles.regularText}>{businessInfo?.industry || 'N/A'}</Text>
          </View>
          <View style={styles.text}>
            <Text style={styles.boldText}>Description: </Text>
            <Text style={styles.regularText}>{businessInfo?.description || 'N/A'}</Text>
          </View>
        </View>

        {/* Mission & Vision */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Strategy Foundation</Text>
          <View style={styles.text}>
            <Text style={styles.boldText}>Mission: </Text>
            <Text style={styles.regularText}>{strategy.mission}</Text>
          </View>
          <View style={styles.text}>
            <Text style={styles.boldText}>Vision: </Text>
            <Text style={styles.regularText}>{strategy.vision}</Text>
          </View>
        </View>

        {/* Content Pillars */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Content Pillars</Text>
          {strategy.contentPillars.map((pillar: any, index: number) => (
            <View key={index} style={styles.contentDay}>
              <Text style={styles.dayTitle}>{pillar.title}</Text>
              <Text style={styles.text}>{pillar.description}</Text>
              <View style={styles.tagsContainer}>
                {pillar.examples.map((example: string, i: number) => (
                  <Text key={i} style={styles.tag}>{example}</Text>
                ))}
              </View>
            </View>
          ))}
        </View>
      </Page>

      {/* Content Calendar - New Page */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.sectionTitle}>Weekly Content Calendar</Text>
        {strategy.contentCalendar.map((day: any, index: number) => (
          <View key={index} wrap={false}>
            <View style={styles.contentDay}>
              <Text style={styles.dayTitle}>{day.date}</Text>
              
              <View style={styles.table}>
                <View style={styles.tableRow}>
                  <View style={styles.tableCell}>
                    <Text style={styles.boldText}>Type: </Text>
                    <Text style={styles.regularText}>{day.contentType}</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text style={styles.boldText}>Platform: </Text>
                    <Text style={styles.regularText}>{day.platform}</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text style={styles.boldText}>Time: </Text>
                    <Text style={styles.regularText}>{day.bestTime}</Text>
                  </View>
                </View>
              </View>

              <View style={styles.text}>
                <Text style={styles.boldText}>Hook: </Text>
                <Text style={styles.regularText}>{day.hook}</Text>
              </View>
              
              <View style={styles.text}>
                <Text style={styles.boldText}>CTA: </Text>
                <Text style={styles.regularText}>{day.cta}</Text>
              </View>

              <View style={styles.text}>
                <Text style={styles.boldText}>Target Audience: </Text>
                <Text style={styles.regularText}>{day.targetAudience}</Text>
              </View>

              <Text style={styles.subSectionTitle}>Content Structure:</Text>
              {renderList(day.contentDetails.structure)}

              <Text style={styles.subSectionTitle}>Content Ideas:</Text>
              {renderContentIdeas(day.contentIdeas)}

              <View style={styles.tagsContainer}>
                {day.hashtags.split(' ').map((tag: string, i: number) => (
                  <Text key={i} style={styles.tag}>{tag}</Text>
                ))}
              </View>
            </View>
          </View>
        ))}

        {/* Footer */}
        <Text style={styles.footer}>
          Generated by VISIONAI - Your AI-Powered Social Media Strategy Partner
        </Text>
      </Page>
    </Document>
  );
}