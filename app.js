// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDbCg3ekUDAtDHClkjyxl2ph76Gl3lc6AU",
  authDomain: "waveflows-app.firebaseapp.com",
  projectId: "waveflows-app",
  storageBucket: "waveflows-app.firebasestorage.app",
  messagingSenderId: "692905452517",
  appId: "1:692905452517:web:0c18a55fab88399bb3850c"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const { useState, useEffect, useCallback } = React;

// Icons
const Heart = ({ className }) => React.createElement("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2 }, React.createElement("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" }));
const MapPin = ({ className }) => React.createElement("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2 }, React.createElement("path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" }), React.createElement("circle", { cx: "12", cy: "10", r: "3" }));
const TrendingUp = ({ className }) => React.createElement("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2 }, React.createElement("polyline", { points: "23 6 13.5 15.5 8.5 10.5 1 18" }), React.createElement("polyline", { points: "17 6 23 6 23 12" }));
const TrendingDown = ({ className }) => React.createElement("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2 }, React.createElement("polyline", { points: "23 18 13.5 8.5 8.5 13.5 1 6" }), React.createElement("polyline", { points: "17 18 23 18 23 12" }));
const Minus = ({ className }) => React.createElement("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2 }, React.createElement("line", { x1: "5", y1: "12", x2: "19", y2: "12" }));
const Bell = ({ className }) => React.createElement("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2 }, React.createElement("path", { d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" }), React.createElement("path", { d: "M13.73 21a2 2 0 0 1-3.46 0" }));
const Search = ({ className }) => React.createElement("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2 }, React.createElement("circle", { cx: "11", cy: "11", r: "8" }), React.createElement("path", { d: "m21 21-4.35-4.35" }));
const Star = ({ className }) => React.createElement("svg", { className, viewBox: "0 0 24 24", fill: "currentColor" }, React.createElement("polygon", { points: "12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" }));
const Activity = ({ className }) => React.createElement("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2 }, React.createElement("polyline", { points: "22,12 18,12 15,21 9,3 6,12 2,12" }));
const Download = ({ className }) => React.createElement("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2 }, React.createElement("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }), React.createElement("polyline", { points: "7,10 12,15 17,10" }), React.createElement("line", { x1: "12", y1: "15", x2: "12", y2: "3" }));
const Wifi = ({ className }) => React.createElement("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2 }, React.createElement("path", { d: "M5 12.55a11 11 0 0 1 14.08 0" }), React.createElement("path", { d: "M1.42 9a16 16 0 0 1 21.16 0" }), React.createElement("path", { d: "M8.53 16.11a6 6 0 0 1 6.95 0" }), React.createElement("circle", { cx: "12", cy: "20", r: "1" }));
const WifiOff = ({ className }) => React.createElement("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2 }, React.createElement("line", { x1: "2", y1: "2", x2: "22", y2: "22" }), React.createElement("path", { d: "M8.5 16.5a5 5 0 0 1 7 0" }), React.createElement("circle", { cx: "12", cy: "20", r: "1" }));
const RefreshCw = ({ className }) => React.createElement("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2 }, React.createElement("polyline", { points: "23 4 23 10 17 10" }), React.createElement("polyline", { points: "1 20 1 14 7 14" }), React.createElement("path", { d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" }));
const MessageSquare = ({ className }) => React.createElement("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2 }, React.createElement("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }));
const Send = ({ className }) => React.createElement("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2 }, React.createElement("line", { x1: "22", y1: "2", x2: "11", y2: "13" }), React.createElement("polygon", { points: "22 2 15 22 11 13 2 9 22 2" }));

// Time ago utility
const timeAgo = function(timestamp) {
  if (!timestamp) return "";
  var date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  var seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  if (seconds < 60) return "just now";
  var minutes = Math.floor(seconds / 60);
  if (minutes < 60) return minutes + " min ago";
  var hours = Math.floor(minutes / 60);
  if (hours < 24) return hours + " hr ago";
  var days = Math.floor(hours / 24);
  return days + (days > 1 ? " days ago" : " day ago");
};

// ReportsList component
const ReportsList = function(props) {
  var spotId = props.spotId;
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function() {
    var unsubscribe = db.collection("reports")
      .where("spotId", "==", spotId)
      .orderBy("timestamp", "desc")
      .limit(5)
      .onSnapshot(function(snapshot) {
        setReports(snapshot.docs.map(function(doc) {
          return Object.assign({ id: doc.id }, doc.data());
        }));
        setLoading(false);
      }, function(err) {
        console.error("Error loading reports:", err);
        setLoading(false);
      });
    return function() { unsubscribe(); };
  }, [spotId]);

  var conditionBadge = function(condition) {
    if (condition === "excellent") return { text: "Epic", color: "text-green-700 bg-green-100" };
    if (condition === "good") return { text: "Good", color: "text-blue-700 bg-blue-100" };
    if (condition === "marginal") return { text: "Marginal", color: "text-yellow-700 bg-yellow-100" };
    if (condition === "poor") return { text: "Poor", color: "text-red-700 bg-red-100" };
    return { text: condition, color: "text-gray-700 bg-gray-100" };
  };

  if (loading) return React.createElement("p", { className: "text-sm text-gray-400 text-center py-3" }, "Loading reports...");
  if (reports.length === 0) return React.createElement("p", { className: "text-sm text-gray-400 italic text-center py-3" }, "No reports yet - be the first!");

  return React.createElement("div", { className: "space-y-3" },
    reports.map(function(report) {
      var badge = conditionBadge(report.condition);
      return React.createElement("div", { key: report.id, className: "bg-white rounded-lg p-3 border border-gray-100 shadow-sm" },
        React.createElement("div", { className: "flex items-center justify-between mb-1 gap-2" },
          React.createElement("div", { className: "flex items-center gap-2" },
            React.createElement("span", { className: "px-2 py-0.5 rounded-full text-xs font-medium " + badge.color }, badge.text),
            React.createElement("span", { className: "text-sm font-medium text-gray-800" }, report.author || "Anonymous")
          ),
          React.createElement("span", { className: "text-xs text-gray-400 whitespace-nowrap" }, timeAgo(report.timestamp))
        ),
        React.createElement("p", { className: "text-sm text-gray-700" }, report.text),
        report.flowAtReport
          ? React.createElement("p", { className: "text-xs text-gray-400 mt-1" },
              "Flow at report: " + Number(report.flowAtReport).toLocaleString() + " " + (report.flowUnit || "cfs"))
          : null
      );
    })
  );
};

// ReportForm component
const ReportForm = function(props) {
  var spotId = props.spotId;
  var spotName = props.spotName;
  var currentFlow = props.currentFlow;
  var flowUnit = props.flowUnit;

  const [showForm, setShowForm] = useState(false);
  const [authorName, setAuthorName] = useState("");
  const [reportText, setReportText] = useState("");
  const [condition, setCondition] = useState("good");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  var conditionOptions = [
    { value: "excellent", label: "Epic",     color: "bg-green-100 text-green-700 border-green-300" },
    { value: "good",      label: "Good",     color: "bg-blue-100 text-blue-700 border-blue-300" },
    { value: "marginal",  label: "Marginal", color: "bg-yellow-100 text-yellow-700 border-yellow-300" },
    { value: "poor",      label: "Poor",     color: "bg-red-100 text-red-700 border-red-300" }
  ];

  var handleSubmit = async function() {
    if (!reportText.trim()) return;
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      await db.collection("reports").add({
        spotId: spotId,
        spotName: spotName,
        author: authorName.trim() || "Anonymous",
        text: reportText.trim(),
        condition: condition,
        flowAtReport: typeof currentFlow === "number" ? currentFlow : null,
        flowUnit: flowUnit || "cfs",
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
      setReportText("");
      setAuthorName("");
      setCondition("good");
      setShowForm(false);
      setSubmitted(true);
      setTimeout(function() { setSubmitted(false); }, 3000);
    } catch (err) {
      console.error("Error submitting report:", err);
      setSubmitError("Could not submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return React.createElement("div", { className: "text-center py-3 text-sm text-green-600 font-medium bg-green-50 rounded-lg" },
      "Report submitted - thanks for sharing!");
  }

  if (!showForm) {
    return React.createElement("button", {
      onClick: function() { setShowForm(true); },
      className: "w-full flex items-center justify-center gap-2 py-2 px-4 border-2 border-dashed border-blue-300 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium"
    }, React.createElement(MessageSquare, { className: "h-4 w-4" }), "Submit a Field Report");
  }

  return React.createElement("div", { className: "bg-gray-50 rounded-lg p-4 border border-gray-200" },
    React.createElement("h4", { className: "font-semibold text-gray-900 mb-3" }, "Submit Field Report"),
    React.createElement("div", { className: "mb-3" },
      React.createElement("p", { className: "text-xs text-gray-500 mb-2" }, "How are conditions right now?"),
      React.createElement("div", { className: "flex gap-2 flex-wrap" },
        conditionOptions.map(function(opt) {
          return React.createElement("button", {
            key: opt.value,
            onClick: function() { setCondition(opt.value); },
            className: "px-3 py-1 rounded-full text-xs font-medium border transition-all " + (
              condition === opt.value ? opt.color + " border-2" : "bg-white text-gray-500 border-gray-200"
            )
          }, opt.label);
        })
      )
    ),
    React.createElement("textarea", {
      value: reportText,
      onChange: function(e) { setReportText(e.target.value); },
      placeholder: "Describe conditions - wave shape, size, crowds, hazards...",
      rows: 3,
      maxLength: 280,
      className: "w-full p-3 text-sm border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 mb-1"
    }),
    React.createElement("div", { className: "flex justify-between mb-3" },
      React.createElement("span", { className: "text-xs text-gray-400" }, reportText.length + "/280"),
      typeof currentFlow === "number"
        ? React.createElement("span", { className: "text-xs text-gray-400" }, "Flow: " + currentFlow.toLocaleString() + " " + flowUnit)
        : null
    ),
    React.createElement("input", {
      type: "text",
      value: authorName,
      onChange: function(e) { setAuthorName(e.target.value); },
      placeholder: "Your name (optional)",
      maxLength: 40,
      className: "w-full p-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
    }),
    submitError ? React.createElement("p", { className: "text-xs text-red-500 mb-2" }, submitError) : null,
    React.createElement("div", { className: "flex gap-2" },
      React.createElement("button", {
        onClick: function() { setShowForm(false); },
        className: "flex-1 py-2 px-3 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100"
      }, "Cancel"),
      React.createElement("button", {
        onClick: handleSubmit,
        disabled: isSubmitting || !reportText.trim(),
        className: "flex-1 py-2 px-3 text-sm font-medium rounded-lg flex items-center justify-center gap-2 " + (
          isSubmitting || !reportText.trim() ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
        )
      }, React.createElement(Send, { className: "h-3 w-3" }), isSubmitting ? "Submitting..." : "Submit Report")
    )
  );
};

// SpotCard component
const SpotCard = function(props) {
  var spot = props.spot;
  var isFavorite = props.isFavorite;
  var onToggleFavorite = props.onToggleFavorite;
  var onSelect = props.onSelect;
  var getStatusColor = props.getStatusColor;
  var getTrendIcon = props.getTrendIcon;
  var isLive = props.isLive;

  var statusColor = getStatusColor(spot.status);
  var isInRange = typeof spot.currentFlow === "number" && spot.currentFlow >= spot.optimalRange[0] && spot.currentFlow <= spot.optimalRange[1];

  return React.createElement("div", { className: "bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer" },
    React.createElement("div", { className: "flex justify-between items-start mb-3" },
      React.createElement("div", { className: "flex-1", onClick: function() { onSelect(spot); } },
        React.createElement("div", { className: "flex items-center gap-2" },
          React.createElement("h3", { className: "font-semibold text-lg text-gray-900" }, spot.name),
          isLive ? React.createElement("span", { className: "inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-700" },
            React.createElement("span", { className: "w-1.5 h-1.5 rounded-full bg-blue-500 mr-1 animate-pulse" }), "Live") : null
        ),
        React.createElement("p", { className: "text-sm text-gray-600" }, spot.river),
        React.createElement("p", { className: "text-xs text-gray-500 flex items-center mt-1" },
          React.createElement(MapPin, { className: "h-3 w-3 mr-1" }), spot.location)
      ),
      React.createElement("button", { onClick: function(e) { e.stopPropagation(); onToggleFavorite(spot.id); }, className: "p-1" },
        React.createElement(Heart, { className: "h-5 w-5 " + (isFavorite ? "fill-red-500 text-red-500" : "text-gray-400") }))
    ),
    React.createElement("div", { onClick: function() { onSelect(spot); } },
      React.createElement("div", { className: "flex items-center justify-between mb-2" },
        React.createElement("span", { className: "px-2 py-1 rounded-full text-xs font-medium " + statusColor },
          spot.status.charAt(0).toUpperCase() + spot.status.slice(1)),
        React.createElement("div", { className: "flex items-center space-x-1" },
          getTrendIcon(spot.trend),
          React.createElement("span", { className: "text-xs text-gray-500" }, spot.trend))
      ),
      React.createElement("div", { className: "space-y-2" },
        React.createElement("div", { className: "flex justify-between items-center" },
          React.createElement("span", { className: "text-sm text-gray-600" }, "Current Flow:"),
          React.createElement("span", { className: "font-semibold" },
            spot.unit === "tidal" ? spot.currentFlow : spot.currentFlow.toLocaleString() + " " + spot.unit)
        ),
        React.createElement("div", { className: "flex justify-between items-center" },
          React.createElement("span", { className: "text-sm text-gray-600" }, "Optimal Range:"),
          React.createElement("span", { className: "text-sm" },
            spot.unit === "tidal" ? spot.optimalRange.join(" - ") : spot.optimalRange[0].toLocaleString() + "-" + spot.optimalRange[1].toLocaleString() + " " + spot.unit)
        ),
        spot.unit !== "tidal" ? React.createElement("div", { className: "w-full bg-gray-200 rounded-full h-2" },
          React.createElement("div", {
            className: "h-2 rounded-full transition-all duration-500 " + (isInRange ? "bg-green-500" : spot.currentFlow < spot.optimalRange[0] ? "bg-red-400" : "bg-orange-400"),
            style: { width: Math.min(100, Math.max(5, (spot.currentFlow / spot.optimalRange[1]) * 100)) + "%" }
          })) : null,
        React.createElement("p", { className: "text-xs text-gray-400" },
          isLive ? "USGS live - " + spot.lastUpdated : "Cached - " + spot.lastUpdated)
      )
    )
  );
};

// SpotModal component
const SpotModal = function(props) {
  var spot = props.spot;
  var onClose = props.onClose;
  var isFavorite = props.isFavorite;
  var onToggleFavorite = props.onToggleFavorite;
  var getStatusColor = props.getStatusColor;
  var getTrendIcon = props.getTrendIcon;
  var isLive = props.isLive;

  var statusColor = getStatusColor(spot.status);

  return React.createElement("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" },
    React.createElement("div", { className: "bg-white rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto" },
      React.createElement("div", { className: "p-6" },

        React.createElement("div", { className: "flex justify-between items-start mb-4" },
          React.createElement("div", null,
            React.createElement("div", { className: "flex items-center gap-2 mb-1" },
              React.createElement("h2", { className: "text-2xl font-bold text-gray-900" }, spot.name),
              isLive
                ? React.createElement("span", { className: "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-700" },
                    React.createElement("span", { className: "w-1.5 h-1.5 rounded-full bg-blue-500 mr-1 animate-pulse" }), "Live USGS")
                : React.createElement("span", { className: "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-500" }, "Cached")
            ),
            React.createElement("p", { className: "text-gray-600" }, spot.river),
            React.createElement("p", { className: "text-sm text-gray-500 flex items-center mt-1" },
              React.createElement(MapPin, { className: "h-4 w-4 mr-1" }), spot.location)
          ),
          React.createElement("div", { className: "flex space-x-2" },
            React.createElement("button", { onClick: function() { onToggleFavorite(spot.id); }, className: "p-2 hover:bg-gray-100 rounded-lg" },
              React.createElement(Heart, { className: "h-6 w-6 " + (isFavorite ? "fill-red-500 text-red-500" : "text-gray-400") })),
            React.createElement("button", { onClick: onClose, className: "p-2 hover:bg-gray-100 rounded-lg text-2xl text-gray-500 leading-none" }, "x")
          )
        ),

        React.createElement("div", { className: "bg-gray-50 rounded-lg p-4 mb-5" },
          React.createElement("div", { className: "grid grid-cols-2 gap-4" },
            React.createElement("div", null,
              React.createElement("div", { className: "flex items-center justify-between mb-2" },
                React.createElement("span", { className: "px-3 py-1 rounded-full text-sm font-medium " + statusColor },
                  spot.status.charAt(0).toUpperCase() + spot.status.slice(1)),
                React.createElement("div", { className: "flex items-center space-x-1" },
                  getTrendIcon(spot.trend),
                  React.createElement("span", { className: "text-sm text-gray-600 capitalize" }, spot.trend))
              ),
              React.createElement("div", { className: "space-y-1" },
                React.createElement("div", { className: "flex justify-between" },
                  React.createElement("span", { className: "text-sm text-gray-600" }, "Current:"),
                  React.createElement("span", { className: "font-semibold" },
                    spot.unit === "tidal" ? spot.currentFlow : spot.currentFlow.toLocaleString() + " " + spot.unit)),
                React.createElement("div", { className: "flex justify-between" },
                  React.createElement("span", { className: "text-sm text-gray-600" }, "Optimal:"),
                  React.createElement("span", { className: "text-sm" },
                    spot.unit === "tidal" ? spot.optimalRange.join(" - ") : spot.optimalRange[0].toLocaleString() + "-" + spot.optimalRange[1].toLocaleString() + " " + spot.unit)),
                React.createElement("div", { className: "flex justify-between" },
                  React.createElement("span", { className: "text-sm text-gray-600" }, "Source:"),
                  React.createElement("span", { className: "text-xs text-gray-500" },
                    isLive ? "USGS Gauge " + spot.gaugeId : "Static / Cached"))
              )
            ),
            React.createElement("div", null,
              React.createElement("p", { className: "text-sm text-gray-600 mb-2" }, "5-Day Forecast"),
              React.createElement("div", { className: "flex items-end space-x-1 h-12" },
                spot.forecast.map(function(flow, i) {
                  var maxFlow = Math.max.apply(null, spot.forecast.filter(function(f) { return typeof f === "number"; }));
                  var h = typeof flow === "number" ? Math.round((flow / maxFlow) * 100) : 30;
                  return React.createElement("div", { key: i, className: "flex-1 bg-blue-200 rounded-t", style: { height: h + "%", minHeight: "4px" } });
                })
              ),
              React.createElement("div", { className: "flex justify-between text-xs text-gray-500 mt-1" },
                React.createElement("span", null, "Today"), React.createElement("span", null, "+4 days"))
            )
          )
        ),

        React.createElement("div", { className: "mb-5" },
          React.createElement("h3", { className: "font-semibold text-gray-900 mb-1" }, "Spot Information"),
          React.createElement("p", { className: "text-gray-700 mb-1" }, spot.description),
          React.createElement("div", { className: "flex items-center gap-4 text-sm" },
            React.createElement("span", { className: "text-gray-600" }, "Difficulty: ",
              React.createElement("span", { className: "font-medium" }, spot.difficulty)),
            React.createElement("span", { className: "text-gray-400" }, "Updated " + spot.lastUpdated)
          )
        ),

        React.createElement("div", { className: "mb-4" },
          React.createElement("h3", { className: "font-semibold text-gray-900 mb-3 flex items-center gap-2" },
            React.createElement(MessageSquare, { className: "h-4 w-4 text-blue-600" }), "Community Field Reports"),
          React.createElement(ReportsList, { spotId: spot.id })
        ),

        React.createElement(ReportForm, {
          spotId: spot.id,
          spotName: spot.name,
          currentFlow: spot.currentFlow,
          flowUnit: spot.unit
        }),

        React.createElement("div", { className: "flex space-x-3 pt-5 mt-5 border-t border-gray-100" },
          React.createElement("button", { className: "flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors" }, "Get Directions"),
          React.createElement("button", { className: "flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors" }, "Share Spot")
        )
      )
    )
  );
};

// Main App component
const WaveFlowsPWA = function() {
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [favorites, setFavorites] = useState(["glenwood", "durango"]);
  const [searchTerm, setSearchTerm] = useState("");
  const [notifications, setNotifications] = useState(true);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [installPrompt, setInstallPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [liveFlows, setLiveFlows] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  const [lastFetchTime, setLastFetchTime] = useState(null);
  const [fetchError, setFetchError] = useState(false);

  var riverSpots = [
    { id: "miracle-wave", name: "Miracle Wave", river: "South Platte River", location: "Littleton, CO", gaugeId: "07099970", currentFlow: 420, optimalRange: [300, 800], unit: "cfs", trend: "stable", status: "good", lastUpdated: "--", forecast: [420, 410, 405, 400, 395], description: "Popular urban wave with consistent features", difficulty: "Intermediate" },
    { id: "reynolds-landing", name: "Reynolds Landing", river: "South Platte River", location: "Littleton, CO", gaugeId: "07099970", currentFlow: 420, optimalRange: [250, 700], unit: "cfs", trend: "stable", status: "good", lastUpdated: "--", forecast: [420, 410, 405, 400, 395], description: "Beginner-friendly wave with easy access", difficulty: "Beginner-Intermediate" },
    { id: "union-chutes", name: "Union Chutes", river: "South Platte River", location: "Englewood, CO", gaugeId: "07099970", currentFlow: 420, optimalRange: [200, 600], unit: "cfs", trend: "stable", status: "good", lastUpdated: "--", forecast: [420, 410, 405, 400, 395], description: "Multiple features and waves", difficulty: "Intermediate" },
    { id: "river-run-park", name: "River Run Park", river: "South Platte River", location: "Commerce City, CO", gaugeId: "06710247", currentFlow: 420, optimalRange: [300, 800], unit: "cfs", trend: "stable", status: "good", lastUpdated: "--", forecast: [420, 410, 405, 400, 395], description: "Modern whitewater park with multiple features", difficulty: "All Levels" },
    { id: "beaver-wave", name: "Beaver Wave", river: "South Platte River", location: "Littleton, CO", gaugeId: "07099970", currentFlow: 420, optimalRange: [250, 650], unit: "cfs", trend: "stable", status: "good", lastUpdated: "--", forecast: [420, 410, 405, 400, 395], description: "Natural wave formation", difficulty: "Intermediate" },
    { id: "16th-street-wave", name: "16th Street Wave", river: "South Platte River", location: "Denver, CO", gaugeId: "06714000", currentFlow: 420, optimalRange: [300, 700], unit: "cfs", trend: "stable", status: "good", lastUpdated: "--", forecast: [420, 410, 405, 400, 395], description: "Downtown Denver wave", difficulty: "Intermediate" },
    { id: "trestle-wave", name: "Trestle Wave", river: "South Platte River", location: "Littleton, CO", gaugeId: "07099970", currentFlow: 420, optimalRange: [200, 600], unit: "cfs", trend: "stable", status: "good", lastUpdated: "--", forecast: [420, 410, 405, 400, 395], description: "Wave near historic trestle bridge", difficulty: "Intermediate" },
    { id: "daves-wave", name: "Daves Wave", river: "South Platte River", location: "Littleton, CO", gaugeId: "07099970", currentFlow: 420, optimalRange: [250, 650], unit: "cfs", trend: "stable", status: "good", lastUpdated: "--", forecast: [420, 410, 405, 400, 395], description: "Named after local river surfer Dave", difficulty: "Intermediate-Advanced" },
    { id: "one-five", name: "1.5", river: "Arkansas River", location: "Canon City, CO", gaugeId: "07087050", currentFlow: 890, optimalRange: [600, 1500], unit: "cfs", trend: "rising", status: "good", lastUpdated: "--", forecast: [890, 920, 950, 980, 1010], description: "Classic Arkansas River wave", difficulty: "Advanced" },
    { id: "buena-vista-park", name: "Buena Vista Park", river: "Arkansas River", location: "Buena Vista, CO", gaugeId: "07087050", currentFlow: 890, optimalRange: [400, 1200], unit: "cfs", trend: "rising", status: "excellent", lastUpdated: "--", forecast: [890, 920, 950, 980, 1010], description: "Popular whitewater park with multiple features", difficulty: "All Levels" },
    { id: "canyon-doors", name: "Canyon Doors", river: "Arkansas River", location: "Browns Canyon, CO", gaugeId: "07091200", currentFlow: 890, optimalRange: [500, 1500], unit: "cfs", trend: "rising", status: "good", lastUpdated: "--", forecast: [890, 920, 950, 980, 1010], description: "Natural wave in scenic canyon setting", difficulty: "Advanced" },
    { id: "salida-park", name: "Salida Park", river: "Arkansas River", location: "Salida, CO", gaugeId: "07091200", currentFlow: 890, optimalRange: [300, 1000], unit: "cfs", trend: "rising", status: "excellent", lastUpdated: "--", forecast: [890, 920, 950, 980, 1010], description: "Premier whitewater park in heart of Salida", difficulty: "All Levels" },
    { id: "florence-river-park", name: "Florence River Park", river: "Arkansas River", location: "Florence, CO", gaugeId: "07096000", currentFlow: 890, optimalRange: [200, 800], unit: "cfs", trend: "rising", status: "excellent", lastUpdated: "--", forecast: [890, 920, 950, 980, 1010], description: "Family-friendly park with beginner features", difficulty: "Beginner-Intermediate" },
    { id: "pueblo-park", name: "Pueblo Park", river: "Arkansas River", location: "Pueblo, CO", gaugeId: "07099970", currentFlow: 890, optimalRange: [250, 900], unit: "cfs", trend: "rising", status: "excellent", lastUpdated: "--", forecast: [890, 920, 950, 980, 1010], description: "Urban whitewater park in Pueblo", difficulty: "All Levels" },
    { id: "pumphouse-wave", name: "Pumphouse Wave", river: "Colorado River", location: "Kremmling, CO", gaugeId: "09058000", currentFlow: 1650, optimalRange: [800, 2500], unit: "cfs", trend: "falling", status: "good", lastUpdated: "--", forecast: [1650, 1620, 1590, 1560, 1530], description: "Natural wave upstream from Glenwood", difficulty: "Intermediate-Advanced" },
    { id: "glenwood", name: "Glenwood Wave", river: "Colorado River", location: "Glenwood Springs, CO", gaugeId: "09085000", currentFlow: 1650, optimalRange: [1200, 2500], unit: "cfs", trend: "falling", status: "good", lastUpdated: "--", forecast: [1650, 1620, 1590, 1560, 1530], description: "World-famous river wave, very popular", difficulty: "Intermediate" },
    { id: "big-sur", name: "Big Sur", river: "Colorado River", location: "Glenwood Springs, CO", gaugeId: "09085000", currentFlow: 1650, optimalRange: [1000, 2200], unit: "cfs", trend: "falling", status: "good", lastUpdated: "--", forecast: [1650, 1620, 1590, 1560, 1530], description: "Wave downstream from Glenwood", difficulty: "Advanced" },
    { id: "lucky-7", name: "Lucky 7", river: "Colorado River", location: "Rifle, CO", gaugeId: "09095500", currentFlow: 1650, optimalRange: [800, 2000], unit: "cfs", trend: "falling", status: "good", lastUpdated: "--", forecast: [1650, 1620, 1590, 1560, 1530], description: "Natural wave formation near Rifle", difficulty: "Intermediate" },
    { id: "las-colonias", name: "Las Colonias", river: "Colorado River", location: "Grand Junction, CO", gaugeId: "09095500", currentFlow: 1650, optimalRange: [600, 1800], unit: "cfs", trend: "falling", status: "excellent", lastUpdated: "--", forecast: [1650, 1620, 1590, 1560, 1530], description: "Whitewater park in Grand Junction", difficulty: "All Levels" },
    { id: "5th-street-wave", name: "5th St Wave GJ", river: "Colorado River", location: "Grand Junction, CO", gaugeId: "09095500", currentFlow: 1650, optimalRange: [500, 1600], unit: "cfs", trend: "falling", status: "excellent", lastUpdated: "--", forecast: [1650, 1620, 1590, 1560, 1530], description: "Urban wave in downtown Grand Junction", difficulty: "Intermediate" },
    { id: "bto", name: "BTO Bridges Take Out", river: "Cache la Poudre River", location: "Fort Collins, CO", gaugeId: "06752000", currentFlow: 320, optimalRange: [200, 600], unit: "cfs", trend: "stable", status: "good", lastUpdated: "--", forecast: [320, 315, 310, 305, 300], description: "Natural wave at popular takeout", difficulty: "Intermediate" },
    { id: "poudre-whitewater-park", name: "Poudre River Whitewater Park", river: "Cache la Poudre River", location: "Fort Collins, CO", gaugeId: "06752000", currentFlow: 320, optimalRange: [150, 500], unit: "cfs", trend: "stable", status: "good", lastUpdated: "--", forecast: [320, 315, 310, 305, 300], description: "Modern whitewater park in Fort Collins", difficulty: "All Levels" },
    { id: "lawson", name: "Lawson", river: "Clear Creek", location: "Lawson, CO", gaugeId: "06719505", currentFlow: 180, optimalRange: [120, 350], unit: "cfs", trend: "stable", status: "good", lastUpdated: "--", forecast: [180, 175, 170, 165, 160], description: "Mountain wave with scenic backdrop", difficulty: "Intermediate" },
    { id: "golden", name: "Golden", river: "Clear Creek", location: "Golden, CO", gaugeId: "06719505", currentFlow: 180, optimalRange: [150, 400], unit: "cfs", trend: "stable", status: "marginal", lastUpdated: "--", forecast: [180, 175, 170, 165, 160], description: "Urban wave perfect for after-work sessions", difficulty: "Intermediate" },
    { id: "gunnison-park", name: "Gunnison Park", river: "Gunnison River", location: "Gunnison, CO", gaugeId: "09114500", currentFlow: 450, optimalRange: [300, 800], unit: "cfs", trend: "rising", status: "good", lastUpdated: "--", forecast: [450, 470, 490, 510, 530], description: "Whitewater park in Gunnison", difficulty: "All Levels" },
    { id: "montrose-park", name: "Montrose Park", river: "Uncompahgre River", location: "Montrose, CO", gaugeId: "09149500", currentFlow: 220, optimalRange: [150, 400], unit: "cfs", trend: "stable", status: "good", lastUpdated: "--", forecast: [220, 215, 210, 205, 200], description: "Family-friendly whitewater park", difficulty: "Beginner-Intermediate" },
    { id: "m-wave", name: "M-Wave", river: "Uncompahgre River", location: "Montrose, CO", gaugeId: "09149500", currentFlow: 220, optimalRange: [120, 350], unit: "cfs", trend: "stable", status: "good", lastUpdated: "--", forecast: [220, 215, 210, 205, 200], description: "Popular wave in Montrose area", difficulty: "Intermediate" },
    { id: "durango", name: "Durango Town Waves", river: "Animas River", location: "Durango, CO", gaugeId: "09361500", currentFlow: 650, optimalRange: [400, 1000], unit: "cfs", trend: "rising", status: "good", lastUpdated: "--", forecast: [650, 680, 710, 740, 770], description: "Multiple waves through downtown Durango", difficulty: "All Levels" },
    { id: "charlies-hole", name: "Charlies Hole", river: "Yampa River", location: "Steamboat Springs, CO", gaugeId: "09239500", currentFlow: 380, optimalRange: [250, 700], unit: "cfs", trend: "stable", status: "good", lastUpdated: "--", forecast: [380, 375, 370, 365, 360], description: "Classic hole feature in Steamboat", difficulty: "Advanced" },
    { id: "basalt-whitewater-park", name: "Basalt Whitewater Park", river: "Roaring Fork River", location: "Basalt, CO", gaugeId: "09081600", currentFlow: 290, optimalRange: [200, 550], unit: "cfs", trend: "falling", status: "good", lastUpdated: "--", forecast: [290, 280, 270, 260, 250], description: "Modern park with multiple features", difficulty: "All Levels" },
    { id: "eagle-whitewater-park", name: "Eagle Whitewater Park", river: "Eagle River", location: "Eagle, CO", gaugeId: "09064600", currentFlow: 340, optimalRange: [200, 600], unit: "cfs", trend: "stable", status: "good", lastUpdated: "--", forecast: [340, 335, 330, 325, 320], description: "Scenic park in Eagle Valley", difficulty: "All Levels" },
    { id: "del-norte-whitewater-park", name: "Del Norte Whitewater Park", river: "Rio Grande", location: "Del Norte, CO", gaugeId: "08220000", currentFlow: 420, optimalRange: [250, 700], unit: "cfs", trend: "rising", status: "good", lastUpdated: "--", forecast: [420, 440, 460, 480, 500], description: "High-altitude whitewater park", difficulty: "All Levels" },
    { id: "farmington-river-wave", name: "Farmington River Wave", river: "Animas River", location: "Farmington, NM", gaugeId: "09365000", currentFlow: 480, optimalRange: [300, 800], unit: "cfs", trend: "stable", status: "excellent", lastUpdated: "--", forecast: [480, 475, 470, 465, 460], description: "New adjustable wave feature at Gateway Park - first in Four Corners region", difficulty: "All Levels" },
    { id: "skookumchuck-narrows", name: "Skookumchuck Narrows", river: "Sechelt Rapids", location: "Egmont, BC", gaugeId: null, currentFlow: "Tidal", optimalRange: ["Incoming tide", "High tide"], unit: "tidal", trend: "tidal", status: "excellent", lastUpdated: "Tidal N/A", forecast: ["High", "High", "Med", "Low", "Med"], description: "World-class tidal bore surfing", difficulty: "Expert" },
    { id: "sleeping-beauty", name: "Sleeping Beauty", river: "Rio Grande del Norte", location: "Taos, NM", gaugeId: "08276500", currentFlow: 280, optimalRange: [200, 500], unit: "cfs", trend: "stable", status: "good", lastUpdated: "--", forecast: [280, 275, 270, 265, 260], description: "Beautiful wave in Taos Box canyon", difficulty: "Advanced" },
    { id: "lunch-counter", name: "Lunch Counter", river: "Snake River", location: "Alpine, WY", gaugeId: "13027500", currentFlow: 1200, optimalRange: [800, 2000], unit: "cfs", trend: "rising", status: "excellent", lastUpdated: "--", forecast: [1200, 1250, 1300, 1350, 1400], description: "Legendary Snake River wave", difficulty: "All Levels" },
    { id: "bend", name: "Bend Whitewater Park", river: "Deschutes River", location: "Bend, OR", gaugeId: "14048000", currentFlow: 320, optimalRange: [250, 600], unit: "cfs", trend: "stable", status: "good", lastUpdated: "--", forecast: [320, 315, 310, 305, 300], description: "Multiple waves and features for all skill levels", difficulty: "Beginner-Advanced" },
    { id: "lochsa-pipeline", name: "Lochsa Pipeline", river: "Lochsa River", location: "Lowell, ID", gaugeId: "13340000", currentFlow: 850, optimalRange: [600, 1500], unit: "cfs", trend: "falling", status: "good", lastUpdated: "--", forecast: [850, 820, 790, 760, 730], description: "Technical wave in pristine wilderness", difficulty: "Expert" },
    { id: "boise-whitewater-park", name: "Boise Whitewater Park", river: "Boise River", location: "Boise, ID", gaugeId: "13206000", currentFlow: 450, optimalRange: [300, 800], unit: "cfs", trend: "stable", status: "good", lastUpdated: "--", forecast: [450, 445, 440, 435, 430], description: "Urban whitewater park in downtown Boise", difficulty: "All Levels" }
  ];

  var fetchGaugeData = useCallback(async function() {
    if (!navigator.onLine) return;
    var uniqueGaugeIds = [];
    riverSpots.forEach(function(s) {
      if (s.gaugeId && uniqueGaugeIds.indexOf(s.gaugeId) === -1) uniqueGaugeIds.push(s.gaugeId);
    });
    setIsFetching(true);
    setFetchError(false);
    try {
      var url = "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=" + uniqueGaugeIds.join(",") + "&parameterCd=00060&period=PT3H&siteStatus=active";
      var res = await fetch(url);
      if (!res.ok) throw new Error("USGS API error: " + res.status);
      var data = await res.json();
      var updates = {};
      data.value.timeSeries.forEach(function(series) {
        var siteCode = series.sourceInfo.siteCode[0].value;
        var values = series.values[0] ? series.values[0].value : [];
        if (values.length === 0) return;
        var latest = parseFloat(values[values.length - 1].value);
        var latestTime = new Date(values[values.length - 1].dateTime);
        var oneHourAgo = new Date(latestTime.getTime() - 60 * 60 * 1000);
        var olderReading = null;
        for (var i = 0; i < values.length; i++) {
          if (new Date(values[i].dateTime) <= oneHourAgo) { olderReading = values[i]; break; }
        }
        var older = olderReading ? parseFloat(olderReading.value) : null;
        var trend = "stable";
        if (older !== null && !isNaN(older) && !isNaN(latest)) {
          var pct = ((latest - older) / older) * 100;
          if (pct > 5) trend = "rising";
          else if (pct < -5) trend = "falling";
        }
        var minutesAgo = Math.round((Date.now() - latestTime.getTime()) / 60000);
        var lastUpdatedStr = minutesAgo <= 1 ? "just now" : minutesAgo < 60 ? minutesAgo + " min ago" : Math.round(minutesAgo / 60) + " hr ago";
        if (!isNaN(latest)) updates[siteCode] = { flow: Math.round(latest), trend: trend, lastUpdated: lastUpdatedStr };
      });
      setLiveFlows(updates);
      setLastFetchTime(new Date());
    } catch (err) {
      console.error("Failed to fetch USGS gauge data:", err);
      setFetchError(true);
    } finally {
      setIsFetching(false);
    }
  }, []);

  useEffect(function() {
    fetchGaugeData();
    var interval = setInterval(fetchGaugeData, 5 * 60 * 1000);
    return function() { clearInterval(interval); };
  }, [fetchGaugeData]);

  var enrichSpot = function(spot) {
    if (!spot.gaugeId || !liveFlows[spot.gaugeId]) return spot;
    var live = liveFlows[spot.gaugeId];
    var flow = live.flow;
    var min = spot.optimalRange[0];
    var max = spot.optimalRange[1];
    var status = spot.status;
    if (typeof min === "number" && typeof max === "number") {
      if (flow < min * 0.7) status = "low";
      else if (flow < min) status = "marginal";
      else if (flow <= max) status = flow > (max - min) * 0.6 + min ? "excellent" : "good";
      else status = "high";
    }
    return Object.assign({}, spot, { currentFlow: live.flow, trend: live.trend, lastUpdated: live.lastUpdated, status: status });
  };

  useEffect(function() {
    if (window.matchMedia("(display-mode: standalone)").matches) setIsInstalled(true);
    var handleBeforeInstallPrompt = function(e) { e.preventDefault(); setInstallPrompt(e); };
    var handleOnline = function() { setIsOnline(true); fetchGaugeData(); };
    var handleOffline = function() { setIsOnline(false); };
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return function() {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [fetchGaugeData]);

  var handleInstallClick = async function() {
    if (!installPrompt) return;
    await installPrompt.prompt();
    setInstallPrompt(null);
  };

  var requestNotificationPermission = async function() {
    if ("Notification" in window) {
      var permission = await Notification.requestPermission();
      if (permission === "granted") {
        setNotifications(true);
        new Notification("WaveFlows Notifications Enabled!", { body: "You will get alerts when your favorite spots hit optimal conditions." });
      }
    }
  };

  useEffect(function() {
    try { var s = localStorage.getItem("waveflows-favorites"); if (s) setFavorites(JSON.parse(s)); } catch (e) {}
  }, []);

  useEffect(function() {
    try { localStorage.setItem("waveflows-favorites", JSON.stringify(favorites)); } catch (e) {}
  }, [favorites]);

  var getStatusColor = function(status) {
    if (status === "excellent") return "text-green-600 bg-green-100";
    if (status === "good") return "text-green-700 bg-green-50";
    if (status === "marginal") return "text-yellow-700 bg-yellow-50";
    if (status === "low") return "text-red-700 bg-red-50";
    if (status === "high") return "text-orange-700 bg-orange-50";
    return "text-gray-700 bg-gray-50";
  };

  var getTrendIcon = function(trend) {
    if (trend === "rising") return React.createElement(TrendingUp, { className: "h-4 w-4 text-blue-600" });
    if (trend === "falling") return React.createElement(TrendingDown, { className: "h-4 w-4 text-red-600" });
    if (trend === "tidal") return React.createElement("span", { className: "text-xs text-blue-600" }, "~");
    return React.createElement(Minus, { className: "h-4 w-4 text-gray-600" });
  };

  var toggleFavorite = function(spotId) {
    setFavorites(function(prev) {
      return prev.includes(spotId) ? prev.filter(function(id) { return id !== spotId; }) : prev.concat([spotId]);
    });
  };

  var enrichedSpots = riverSpots.map(enrichSpot);
  var filteredSpots = enrichedSpots.filter(function(spot) {
    var q = searchTerm.toLowerCase();
    return spot.name.toLowerCase().includes(q) || spot.river.toLowerCase().includes(q) || spot.location.toLowerCase().includes(q);
  });
  var favoriteSpots = filteredSpots.filter(function(spot) { return favorites.includes(spot.id); });
  var otherSpots = filteredSpots.filter(function(spot) { return !favorites.includes(spot.id); });
  var lastFetchDisplay = lastFetchTime ? lastFetchTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : null;

  return React.createElement("div", { className: "min-h-screen bg-gray-100" },

    React.createElement("div", { className: "bg-gray-900 text-white p-4 shadow-xl" },
      React.createElement("div", { className: "max-w-6xl mx-auto" },
        React.createElement("div", { className: "flex items-center justify-between mb-4" },
          React.createElement("div", { className: "flex items-center space-x-3" },
            React.createElement("div", { className: "bg-blue-500 p-2 rounded-lg" },
              React.createElement("svg", { className: "h-6 w-6 text-white", viewBox: "0 0 24 24", fill: "currentColor" },
                React.createElement("path", { d: "M3 12c0 1.5 1 3 2.5 3.5S8 17 8 15.5s-1-3-2.5-3.5S3 10.5 3 12zm6 0c0 1.5 1 3 2.5 3.5S14 17 14 15.5s-1-3-2.5-3.5S9 10.5 9 12zm6 0c0 1.5 1 3 2.5 3.5S20 17 20 15.5s-1-3-2.5-3.5S15 10.5 15 12z" })
              )
            ),
            React.createElement("div", null,
              React.createElement("h1", { className: "text-2xl font-bold tracking-tight" }, "WaveFlows"),
              lastFetchDisplay
                ? React.createElement("p", { className: "text-xs text-gray-400" }, "Live data - Updated " + lastFetchDisplay)
                : React.createElement("p", { className: "text-xs text-gray-400" }, "Connecting to USGS...")
            )
          ),
          React.createElement("div", { className: "flex items-center space-x-2" },
            isOnline ? React.createElement(Wifi, { className: "h-4 w-4 text-green-400" }) : React.createElement(WifiOff, { className: "h-4 w-4 text-red-400" }),
            React.createElement("button", {
              onClick: fetchGaugeData,
              disabled: isFetching || !isOnline,
              className: "p-2 rounded-lg transition-colors " + (isFetching ? "bg-gray-700 text-gray-500 cursor-wait" : "bg-gray-700 hover:bg-gray-600 text-gray-300")
            }, React.createElement(RefreshCw, { className: "h-4 w-4 " + (isFetching ? "animate-spin" : "") })),
            installPrompt && !isInstalled
              ? React.createElement("button", { onClick: handleInstallClick, className: "p-2 rounded-lg bg-blue-600 hover:bg-blue-700" },
                  React.createElement(Download, { className: "h-5 w-5" }))
              : null,
            React.createElement("button", {
              onClick: notifications ? function() { setNotifications(false); } : requestNotificationPermission,
              className: "p-2 rounded-lg transition-colors " + (notifications ? "bg-gray-700 text-blue-400" : "bg-gray-800 text-gray-400")
            }, React.createElement(Bell, { className: "h-5 w-5" }))
          )
        ),
        React.createElement("div", { className: "relative" },
          React.createElement(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" }),
          React.createElement("input", {
            type: "text",
            placeholder: "Search river spots...",
            value: searchTerm,
            onChange: function(e) { setSearchTerm(e.target.value); },
            className: "w-full pl-10 pr-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          })
        ),
        !isOnline
          ? React.createElement("div", { className: "mt-3 p-2 bg-yellow-600 text-yellow-100 rounded-lg text-sm text-center" }, "Offline mode - Showing cached data")
          : fetchError
          ? React.createElement("div", { className: "mt-3 p-2 bg-red-700 text-red-100 rounded-lg text-sm text-center" }, "Could not reach USGS - showing last known flows. Will retry in 5 min.")
          : null
      )
    ),

    React.createElement("div", { className: "max-w-6xl mx-auto p-4" },
      favoriteSpots.length > 0
        ? React.createElement("div", { className: "mb-6" },
            React.createElement("h2", { className: "text-xl font-semibold mb-3 flex items-center" },
              React.createElement(Star, { className: "h-5 w-5 text-yellow-500 mr-2" }), "Favorite Spots"),
            React.createElement("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" },
              favoriteSpots.map(function(spot) {
                return React.createElement(SpotCard, {
                  key: spot.id, spot: spot, isFavorite: true, onToggleFavorite: toggleFavorite,
                  onSelect: setSelectedSpot, getStatusColor: getStatusColor, getTrendIcon: getTrendIcon,
                  isLive: !!(spot.gaugeId && liveFlows[spot.gaugeId])
                });
              })
            )
          )
        : null,

      React.createElement("div", { className: "mb-6" },
        React.createElement("h2", { className: "text-xl font-semibold mb-3 flex items-center" },
          React.createElement(Activity, { className: "h-5 w-5 text-blue-600 mr-2" }),
          favoriteSpots.length > 0 ? "All Spots" : "River Surf Spots (" + riverSpots.length + ")"
        ),
        React.createElement("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" },
          otherSpots.map(function(spot) {
            return React.createElement(SpotCard, {
              key: spot.id, spot: spot, isFavorite: false, onToggleFavorite: toggleFavorite,
              onSelect: setSelectedSpot, getStatusColor: getStatusColor, getTrendIcon: getTrendIcon,
              isLive: !!(spot.gaugeId && liveFlows[spot.gaugeId])
            });
          })
        )
      )
    ),

    selectedSpot
      ? React.createElement(SpotModal, {
          spot: enrichSpot(selectedSpot),
          onClose: function() { setSelectedSpot(null); },
          isFavorite: favorites.includes(selectedSpot.id),
          onToggleFavorite: toggleFavorite,
          getStatusColor: getStatusColor,
          getTrendIcon: getTrendIcon,
          isLive: !!(selectedSpot.gaugeId && liveFlows[selectedSpot.gaugeId])
        })
      : null
  );
};

ReactDOM.render(React.createElement(WaveFlowsPWA), document.getElementById("root"));
